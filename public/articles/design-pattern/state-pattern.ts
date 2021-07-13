// Note. 인증 상태를 예로 만든 스테이트 패턴 연습
// Request <최초 상태>
// Request -> 반려됨 -> Rejected
// Request -> 승인됨 -> Approved
// Rejected -> 승인됨 -> Approved
// Approved -> 만료됨 -> Expired
// Expired -> 재신청 -> Request

// eslint-disable-next-line max-classes-per-file
abstract class CertificateState {
  // eslint-disable-next-line no-useless-constructor
  constructor(protected readonly context: Certificate) { }

  abstract approve(): void;

  abstract reject(): void;

  abstract expire(): void;

  abstract request(): void;
}

export class InvalidStateTransitionError extends Error {
  constructor() {
    super('Invalid state transition.');
  }
}

export class RequestState extends CertificateState {
  approve(): void {
    this.context.setState(this.context.ApprovedState);
  }

  expire(): void {
    throw new InvalidStateTransitionError();
  }

  reject(): void {
    this.context.setState(this.context.RejectedState);
  }

  request(): void {
    throw new InvalidStateTransitionError();
  }
}

export class RejectedState extends CertificateState {
  approve(): void {
    this.context.setState(this.context.ApprovedState);
  }

  expire(): void {
    throw new InvalidStateTransitionError();
  }

  reject(): void {
    // Nothing Changed, Still rejected state.
  }

  request(): void {
    throw new InvalidStateTransitionError();
  }
}

export class ApprovedState extends CertificateState {
  approve(): void {
    throw new InvalidStateTransitionError();
  }

  expire(): void {
    this.context.setState(this.context.ExpiredState);
  }

  reject(): void {
    throw new InvalidStateTransitionError();
  }

  request(): void {
    throw new InvalidStateTransitionError();
  }
}

export class ExpiredState extends CertificateState {
  approve(): void {
    throw new InvalidStateTransitionError();
  }

  expire(): void {
    throw new InvalidStateTransitionError();
  }

  reject(): void {
    throw new InvalidStateTransitionError();
  }

  request(): void {
    this.context.setState(this.context.RequestState);
  }
}

class Certificate {
  public RequestState = new RequestState(this);

  public ApprovedState = new ApprovedState(this);

  public RejectedState = new RejectedState(this);

  public ExpiredState = new ExpiredState(this);

  private state: CertificateState;

  constructor() {
    this.state = this.RequestState;
  }

  public setState(state: CertificateState) {
    this.state = state;
  }

  public getState(): CertificateState {
    return this.state;
  }

  public approve(): void {
    this.state.approve();
  }

  public expire(): void {
    this.state.expire();
  }

  public reject(): void {
    this.state.reject();
  }

  public request(): void {
    this.state.request();
  }
}

export { Certificate };
