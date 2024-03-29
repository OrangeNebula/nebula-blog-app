ideavim 사용기

개발을 하다보면 항상 좀 더 내 생산성을 키울 수 있는 방법이 없을까 고민하게 된다. IDE 를 나에게 맞게 잘 설정해보기도 하고, 코드 컴플리션 기능을 더 잘 사용해볼 수 있는 방법을 써보기도 한다. 최근에 vim 을 사용하는 안드로이드 개발자가 조인했는데, 평소에 vim 이나 emacs 를 사용해볼까 고민하던차였길레 함께 vim 을 사용해보기로 했다. 

vim 을 사용하기 전에 기대했던 것들이 몇가지 있는데, 사용중인 윈도우와 맥, 두 환경에서 일관성있는 키맵 및 환경 설정을 하고 싶었고, 좀 더 생산성 있는 코드 타이핑 및 브라우징을 하고 싶었다. 

배경
안드로이드 개발자 vim 사용 경험이 있음
윈도우와 맥 둘다 일관적인 키맵 및 환경 셋팅을 하고 싶었음
좀 더 생산성 있는 코드 리딩 및 타이핑을 하고 싶었음

과정
검색을 해보다가 vim adventures 를 알게됨. 간단한 커서 이동 방법이나, 라인 이동을 알 수 있었고, 흥미 유발에 도움이 되었음. 일정 챕터 이상 넘어가면 유료로 넘어가게 됨.

그 후 간단한 책을 읽으면서 자주쓰는 커맨드나, 치환, 검색, 코드 브라우징에 편한 방법들을 외우려고 했음. (Anki 로 외우고 다님)

주로 Webstorm 을 쓰는데, jetbrains 계열 ide 에서 사용할 수 있는 ideavim 을 알게됨. 바로 연동해서 사용해봄. 초반에는 좀 헤맸지만, 1주 정도 지나니, 기존에 개발해왔던 방법만큼 익숙해졌음. 그 후 나에게 맞는 플러그인 설정 등을 위한 커스터마이징을 시도해봄.

그 중에 multicursor 가 있는데, 이걸 리포지토리에서 보니까 deprecated 되어 있었음. 대신 visual-multi-cursor 라는게 생겼는데, 이건 또 vim plug 를 설치해야 하더라. 설치해서 우선 vim editor 에서 먼저 써봄. 아주 만족스러움. ideamvim 에서도 써볼려고 .ideavimrc 설정함. 근데 안됨. 찾아보니 ideavimrc 에서 설정 가능한 plugin 외에는 설정 몬함. 삽질 아주 거하게 했음.

결론
ideavim 에 있는 버그, 제한적인 부분 등을 제외하면 vim 사용 그 자체로는 아주 만족스러움. 내 멘토분이 emacs 를 쓰고 있어서 이것도 관심이 갔는데, 당분간은 vim 에 푹 빠져 살 것 같음. 


그 외에 사용 가능한 플러그인은 다음과 같음

ideaVimExtension
normal 모드에서는 영어로 모드로 자동으로 switching 해주는 플러그인. insert 모드에서 한글을 쓴 다음에 normal 모드로 돌아오면 한글모드여서 커서 이동의 커맨드가 안먹히는데, 이 플러그인을 사용하면 자동으로 영어로 스위칭을 해준다.

vim easymotion
motion 을 더 쉬운 방식으로 사용할 수 있게 해주는 플러그인. 예를 들어 <ll>w 를 사용하면 word motion 을 사용할 수 있고, jump 할 수 있는 위치를 다 보여준다. 하이라이트된 위치의 커맨드를 입력하면 바로 그 위치로 이동할 수 있다.

혹은 <ll>f 를 입력하고 'item' 을 입력하면 item 을 모두 하이라이트하고 원하는 곳으로 점프할 수 있도록 해준다.

아래에 간단한 튜토리얼이 있음.
https://code.tutsplus.com/tutorials/vim-essential-plugin-easymotion--net-19223

NERDTree
file system 을 브라우징할 수 있는 플러그인. Ideavim 에서 지원을 하며, project view 에서 J, K 로 위 아래로 이동할 수 있는등의 커맨드를 지원한다!!

o: 현재 파일을 열거나 디렉토리를 연다
go: 선택한 파일을 열지만 NERDTree 에 커서를 유지한다..
i: 현재 선택한 파일을 split window 로 연다. (horizontal)
s: 현재 선택한 파일을 split window 로 연다. (vertical)


vim-surround
태그나 괄호, 따옴표 등, surround 말 그대로, 이런것들을 다루는데 특화된 플러그인이다.
cs 를 이용하면 변경을 할 수 있는듯 하고


vim-multiple-cursors
여러 단어를 동시에 편집하거나, 여러 라인을 동시에 편집하는 등, 여러개의 커서를 두고 작업해야 하는 상황에서 용이한 플러그인이다. easymotion 과 더불어 강력한 플러그인 중 하나라고 생각한다. 지금 github 에서 이 플러그인은 deprecated 되고, vim-visual-multi 란게 나온 모양이다. 기능이 더 개선된 모양이지만 아쉽게도 지금 ideavim 에서 쓸 순 없을것 같다.

vim-highlightedyank
yank 를 할 때, 어떤 부분이 yank 되는지 잠깐 하이라이트 시켜주는 플러그인

