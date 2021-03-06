import React from 'react';
import hasBadge from '../index';
import moment from 'moment';

describe('badge checker', () => {
  it('should has badge when 3 days in a raw was filled', () => {
    const today = moment();

    const _1dayAgo = today.subtract(1, 'days').unix();
    const _2dayAgo = today.subtract(1, 'days').unix();
    const _3dayAgo = today.subtract(1, 'days').unix();
    const filledDays = [_1dayAgo, _2dayAgo, _3dayAgo];
    const itHasBadge = hasBadge(filledDays);
    expect(itHasBadge).toEqual(true);
  });

  it('should has badge when 3 days multiple in a raw was filled', () => {
    const today = moment();

    const _1dayAgoA = today.subtract(1, 'days').unix();
    const _1dayAgoB = today.subtract(1, 'days').unix();
    const _1dayAgoC = today.subtract(1, 'days').unix();
    const _2dayAgoA = today.subtract(1, 'days').unix();
    const _2dayAgoB = today.subtract(1, 'days').unix();
    const _2dayAgoC = today.subtract(1, 'days').unix();
    const _2dayAgoD = today.subtract(1, 'days').unix();
    const _3dayAgo = today.subtract(1, 'days').unix();
    const filledDays = [
      _1dayAgoA,
      _1dayAgoB,
      _1dayAgoC,
      _2dayAgoA,
      _2dayAgoB,
      _2dayAgoC,
      _2dayAgoD,
      _3dayAgo
    ];
    const itHasBadge = hasBadge(filledDays);
    expect(itHasBadge).toEqual(true);
  });

  it('should not have badge when 2 days in a raw was filled', () => {
    const today = moment();

    const _1dayAgo = today.subtract(1, 'days').unix();
    const _2dayAgo = today.subtract(1, 'days').unix();
    const filledDays = [_1dayAgo, _2dayAgo];
    const itHasBadge = hasBadge(filledDays);
    expect(itHasBadge).toEqual(false);
  });

  it('should not have badge when 3 days in a raw was filled but same times ago', () => {
    const today = moment();

    const _2dayAgo = today.subtract(2, 'days').unix();
    const _3dayAgo = today.subtract(1, 'days').unix();
    const _4dayAgo = today.subtract(1, 'days').unix();
    const filledDays = [_2dayAgo, _3dayAgo, _4dayAgo];
    const itHasBadge = hasBadge(filledDays);
    expect(itHasBadge).toEqual(false);
  });

  it('should not have badge when has one day off', () => {
    const today = moment();

    const _1dayAgo = today.subtract(1, 'days').unix();
    const _3dayAgo = today.subtract(2, 'days').unix();
    const filledDays = [_1dayAgo, _3dayAgo];
    const itHasBadge = hasBadge(filledDays);
    expect(itHasBadge).toEqual(false);
  });

  it('should not have badge when no filled days', () => {
    const filledDays = [];
    const itHasBadge = hasBadge(filledDays);
    expect(itHasBadge).toEqual(false);
  });

  it('should not have badge when filled only day ago', () => {
    const today = moment();

    const _1dayAgo = today.subtract(1, 'days').unix();
    const filledDays = [_1dayAgo];
    const itHasBadge = hasBadge(filledDays);
    expect(itHasBadge).toEqual(false);
  });
});
