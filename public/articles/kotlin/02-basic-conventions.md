
### Names for test methods
테스트에서는 backticks 을 이용하여 테스트 메소드 이름을 지을 수도 있다. 
~~~
class MyTestClass {
    @Test fun `ensure everything works`() { ... }
    
    @Test fun ensureEverythingWorks_onAndroid() { ...}
}
~~~
