### 디미터의 법칙
집을 짓는것을 예로 들 때, 우리는 주계약자와 계약을 하고, 주계약자는 벽돌을 쌓는등의 일을 하도급자에게 맡긴다. 주계약자가 벽돌을 쌓아줄 수도 있겠지만, 주계약자가 벽돌을 쌓던, 하도급자가 쌓던, 하도급자를 어떻게 관리하던 우리의 관심사가 아니다. 소프트웨어도 마찬가지로, 이런 관심사를 줄여야 한다. 

An object a can request a service (call a method) of an object instance b, but object a should not "reach through" object b to access yet another object, c, to request its services. Doing so would mean that object a implicitly requires greater knowledge of object b's internal structure.

Instead, b's interface should be modified if necessary so it can directly serve object a's request, propagating it to any relevant subcomponents. Alternatively, a might have a direct reference to object c and make the request directly to that. If the law is followed, only object b knows its own internal structure.

More formally, the Law of Demeter for functions requires that a method m of an object a may only invoke the methods of the following kinds of objects:[3]

a itself;
m's parameters;
any objects instantiated within m;
a's attributes;
global variables accessible by a in the scope of m.
In particular, an object should avoid invoking methods of an object returned by another method. For many modern object oriented languages that use a dot as field identifier, the law can be stated simply as "use only one dot". That is, the code a.m().n() breaks the law where a.m() does not. As an analogy, when one wants a dog to walk, one does not command the dog's legs to walk directly; instead one commands the dog which then commands its own legs.

1. 객체 자신의 메소드
2. 메소드의 매개변수로 넘어온 인자의 메소드
3. 메소드 내부에서 생성 된 객체의 메소드
4. 메소드가 포함하고 있는 객체의 메소드
