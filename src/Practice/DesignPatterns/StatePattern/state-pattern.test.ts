import {
  ApprovedState, Certificate, InvalidStateTransitionError, RejectedState,
} from './state-pattern';

describe('Certificate 클래스 테스트', () => {
  test('요청 상태에서 반려처리가 되면 반려상태가 된다.', () => {
    const fixture = new Certificate();
    fixture.reject();
    expect(fixture.getState()).toBeInstanceOf(RejectedState);
  });

  test('반려 상태에서 승인처리를 하면, 승인상태가 된다.', () => {
    const fixture = new Certificate();
    fixture.reject();
    fixture.approve();
    expect(fixture.getState()).toBeInstanceOf(ApprovedState);
  });

  test('요청 상태에서 만료처리를 하면, 에러가 발생한다.', () => {
    const fixture = new Certificate();
    expect(() => {
      fixture.expire();
    }).toThrowError(InvalidStateTransitionError);
  });
});
