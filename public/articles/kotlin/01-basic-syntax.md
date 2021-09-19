### 메인
코틀린 애플리케이션의 메인 함수는 main function 이다.
```
fun main() {
    println("Hello world!")
}
```

### 함수
콜론 옆에 타입을 명시하는 것으로 함수 리턴타입을 정할 수 있다.
```
fun sum(a: Int, b: Int): Int {
    return a + b
}
```
함수 body 를 이렇게도 쓸 수 있다.
```
fun sum(a Int, b: Int) = a + b
```
if 를 사용할 수도 있다.
```
fun maxOf(a: Int, b: Int) = if (a > b) a else b
```

### 읽기 전용 지역 변수
val 을 이용하여 선언할 수 있다.
```
val a: Int = 1
val b = 2
val c: Int
c = 3
```

### When
```
fun describe(obj: Any): String =
    when (obj) {
        1           -> "One"
        "Hello"     -> "Greeting"
        is Long     -> "Long"
        !is String  -> "Not a string"
        else        -> "Unknown"
    }
```

### Ranges
```
for (x in 1..5) {
    print(x)
}
```
~~~
for (x in 9 downTo 0 step 3) {
    print(x)
}
~~~

### Default values
~~~
fun foo(a: Int = 0, b: String = "") { ... }
~~~

### Filter (shorter)
~~~
val positives = list.filter { it > 0 }
~~~

### Read-only list, map
~~~
val list = listOf("a", "b", "c")
val map = mapOf("a" to 1, "b" to 2, "c" to 3)
~~~

### Traverse
~~~
for ((k, v) in map) {
    println("$k -> $v")
}
~~~

### Instantiate an abstract class
~~~
abstract class AbstractClass {
    abstract fun doSomething()
    abstract fun sleep()
}

fun main() {
    val myObject = object : AbstractClass() {
        override fun doSomething() {
        }
        
        override fun sleep() {
        }
    }
    myObject.doSomething()
}
~~~

### Execute if not null
~~~
val value = ...
value?.let {
}
~~~

### Return on when statement
~~~
fun transform(color: String): Int {
    return when (color) {
        "Red" -> 0
        "Green" -> 1
        "Blue" -> 2
        else -> throw IllegalArgumentException("~~")
    }
}
~~~

### Call multiple methods on an object instance (with)
~~~
class Turtle {
    fun penDown()
    fun penUp()
    fun turn(degrees: Double)
    fun forward(pixels: Double)
}

val myTurtle = Turtle()
with(myTurtle) {
    penDown()
    for (i in 1..4) {
        forward(100.0)
        turn(90.0) 
    }
    penUp()
}
~~~

### Generic function
inline fun <reified T: Any> Gson.fromJson(jsonL JsonElement): T = this.fromJson(json, T::class.java)

### Swap
var a = 1
var b = 2
a = b.also { b = a }
