
## 실용주의 접근법

### 추정
추정은 단위에 따라서 해석의 차이를 가져온다. 130일 가량 걸린다와, 6개월 가량 걸린다는, 듣는 사람으로 하여금 해석의 여지가 있다. 

모든 추정치는 문제의 모델에 기반한다. 가장 기본적인 추정 기술은 이미 그 일을 해본사람에게 물어보는 것이다. 완벽히 똑같은 일을 해본사람을 찾기는 어렵겠지만, 비슷한 상황에 처했던 사람들을 이해하려 노력함으로써 그들의 경험에 기반한 추정치를 낼 수 있을 것이다.


어떤 종류의 추정이건 상대방이 무엇을 묻고 있는것인지 이해하는것으로 시작한다. 명시적으로 질문에 드러나지는 않지만, 추정을 하기 전에 미리 생각하는 습관을 들이는것이 좋다.

요청한것이 무엇인지 이해하고 난 다음에는, 대략적인 모델을 그려보아라. 모델을 만들어보는 것은 창의적이고 유용하다. 모델을 만들고 난 후에는 컴포넌트로 분해할 수 있다. 이런 컴포넌트들이 어떻게 상호작용하는지, 각 컴포넌트가 전체 모듈에 어떻게 기여하는지 영향을 미치는 매개변수가 있다는 것을 발견할 것이다. 이 단계에서는 이 매개 변수를 식별해야 한다. 매개변수를 찾았다면, 어떤 값을 줄 것인지 고민해야 한다. 중요 매개 변수를 계산하는데는 나름의 근거가 있어야 한다. 예를 들어 트랜잭션 도달 비율을 측정해보거나, 측정 가능한 비슷한 시스템을 찾아야 한다. 마지막으로 답을 계산하고, 추정치를 기록한다. 
추정치가 틀렸다고 도망가지 마라. 왜 추측이 틀렸는지 원인을 찾아야 한다. 시간을 들여 이를 규명하라. 다음 추정치는 훨씬 나아질 것이다.

## 기본적인 도구


### 디버깅
디버깅은 개발자에게 예민하고 감성적인 주제다. 버그가 여러분의 잘못인지 다른 사람의 잘못인지는 그리 중요한게 아니다. 어쨋거나 그 버그는 여러분의 문제로 남는다. 디버깅을 할 때는 올바른 사고방식을 갖는게 중요하다. 여러분의 많은 방어시설을 꺼버리고, 스스로를 편안하게 만들어야 한다.  
어떤 문제건 해결을 하려면 관련 자료를 모을 필요가 있다. 불행히도 버그 보고는 정확한 과학은 아니다. 제 삼자를 통하면 정확도는 더 떨어진다. 따라서 버그를 보고한 사용자를 인터뷰하거나, 경계 조건이나 실제 최종 사용자 사용자 패턴 모두를 철저히 테스트하여 체계적으로 할 필요가 있다.  
무엇이 벌어지고 있는지 이해한 다음에는 프로그램은 어떻게 이해하고 있는지 확인해야 한다. 데이터를 가시화하는 것으로 프로그램 속을 체혀나가다보면 버그를 찾을 수 있을 때가 많다. 때로는 다른 누군가에게 문제를 설명하면서 버그를 찾을 때도 있다. 자신이 놓쳤던 기본가정들이 다른 사람에게 이야기할 때는 명시적으로 이야기를 해야 하게 되는데, 이때 새로운 통찰을 얻을 수 있을 때가 많다.  
버그를 발견하여 놀랄 때가 있다. 그리곤 그럴리가 없는데를 중얼거리게 된다. 당신이 애지중지 믿고 있던 진실을 재평가해야 한다. 당신이 세운 가정들이 잘못되었음을 깨닫고, 맥락안에서 데이터로 경계 조건하에게 증명해라. 