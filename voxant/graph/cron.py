import time
from abc import ABC, abstractmethod
from datetime import datetime

from pydantic import BaseModel, Field, PrivateAttr

UnixTime = float  # unix time in seconds


def now() -> UnixTime:
    return time.time()


Second = 1
Minute = Second * 60
Hour = Minute * 60
Day = Hour * 24


class CronExpr(BaseModel, ABC):

    @abstractmethod
    def next_tick(self) -> UnixTime:
        pass


class Interval(CronExpr):

    seconds: float = Field(..., gt=0, description="time in seconds")

    def next_tick(self) -> UnixTime:
        return now() + self.seconds


class Linear(CronExpr):

    base_seconds: float = Field(..., ge=0, description="base time in seconds")

    step_seconds: float = Field(..., gt=0, description="step time in seconds")

    max_interval_seconds: float = Field(
        ..., gt=0, description="max interval between ticks in seconds"
    )

    _count: int = PrivateAttr(default=0)

    def next_tick(self) -> UnixTime:
        next_tick = (
            now()
            + self.base_seconds
            + min(self.step_seconds * self._count, self.max_interval_seconds)
        )
        self._count += 1
        return next_tick


class Exp(CronExpr):

    base_seconds: float = Field(..., gt=0, description="base time in seconds")

    exponent: float = Field(..., ge=1, description="exponent")

    max_interval_seconds: float = Field(
        ..., gt=0, description="max interval between ticks in seconds"
    )

    _count: int = PrivateAttr(default=0)

    def next_tick(self) -> UnixTime:
        next_tick = now() + min(
            self.base_seconds * (self.exponent**self._count), self.max_interval_seconds
        )
        self._count += 1
        return next_tick


def interval(seconds: float) -> Interval:
    return Interval(seconds=seconds)


def linear(base: float, step: float, max_interval: float) -> Linear:
    return Linear(
        base_seconds=base,
        step_seconds=step,
        max_interval_seconds=max_interval,
    )


def exp(base: float, exponent: float, max_interval: float) -> Exp:
    return Exp(
        base_seconds=base,
        exponent=exponent,
        max_interval_seconds=max_interval,
    )
