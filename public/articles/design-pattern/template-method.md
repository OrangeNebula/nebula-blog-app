### 정의
템플릿 메소드 패턴에서는 메소드에서 알고리즘의 골격을 정의한다. 알고리즘의 여러 단계 중 일부는 서브클래스에서 구현하도록 하고, 일부는 선택적으로 구현할 수 있도록 기본 메소드를 제공할 수 있다. 템플릿 메소드를 이용하면 알고리즘의 구조는 그대로 가져가면서 서브클래스가 특정 단계를 구현하도록 하거나, 혹은 재정의 할 수 있다.

### 구조 예제
```
abstract class AbstractClass {
    final void templateMethod() {
        primitiveOperation1();
        primitiveOperation2();
        concreteOperation();
    }
    
    abstract void primitiveOperation1();
    
    abstract void primitiveOperation2();
    
    void concreteOperation() {
    }
}
```

### 후크
그 중, 추상 메소드가 아니라 템플릿 메소드 클래스가 기본 기능을 정의하고, 서브클래스가 필요에 따라 재정의할 수 있는 메소드를 후크(hook) 라고 한다. 후크를 이용하면 알고리즘의 특정단계에서 어떤 행위를 할 수 있을지 세부적으로 하위 클래스가 재정의 할 수 있게되어 유연해진다.

### 단점
템플릿 메소드 패턴을 남용하면, 추상 메소드와 추상 클래스가 많아져서 일일이 구현하기가 불편하고 복잡해진다. (라자냐 코드) 그렇다고 너무 큰 단계로만 쪼개면 유연성이 떨어지게 된다. 이 두 trade-off 에 대한 밸런스를 잘 맞춰야 한다.

### 헐리우드 원칙
먼저 연락하지 마세요. 제가 연락할께요.

의존성이 복잡하게 꼬이게되면 의존성 부패가 일어나는데, 헐리우드 원칙을 사용하면, 저수준 구성요소에서 컴퓨테이션에 참여할 순 있지만, 언제 사용이 될지는 고수준 구성요소가 결정하게 할 수 있다.
템플릿 메소드 패턴을 예로 들면, 추상 클래스가 알고리즘의 구조를 정의하고 있고, 세부적인 부분은 저수준 구성요소(하위 클래스)가 구현하게 하여, 제공된 메소드를 호출하는 점이, 헐리우드 원칙이라 볼 수 있다.

### 헐리우드 원칙과 의존성 역전 원칙
DIP 가 좀 더 강하고 일반적인 내용을 담고 있다. 

### 예시
JAVA 의 Array 에서 제공하는 sort 가 일종의 템플릿 메소드 패턴이라고 할 수 있다. 완전히 정석은 아니지만, Array 가 sort 알고리즘의 개요를 작성하고, 어떤 아이템이 앞에 와야 할 지, 뒤로 가야할지를 Comparable 인터페이스의 compareTo 메소드를 제공받아서 알고리즘을 실행하기 때문이다. Array 의 서브클래스가 알고리즘의 일부분을 제공하는 것은 아니지만, 실무에서는 정석적인 템플릿 메소드 패턴보다는 이렇게 좀 더 유연하게 작성된 코드들이 더 많다.

### 전략 패턴과의 유사점
알고리즘을 캡슐화한다는 점에서 유사한 점을 가진다. 하지만 전략 패턴은 제공 받는 객체가 완전히 알고리즘을 구현한다는 점이 다르다. 템플릿 메소드는 알고리즘의 레이아웃만 구현하고, 세부적인 것은 하위 클래스에서 제공 받지만, 전략 패턴은 완전한 알고리즘을 제공받는다. 또한 전략 패턴은 composition 을 사용하는 반면, 템플릿 메소드 패턴은 상속을 이용한다. 이때문에 전략 패턴이 좀 더 유연하기는 하나, 템플릿 메소드는 덜 복잡하고, 중복 코드를 효과적으로 줄일 수 있기에 조금 더 효율적이다.
