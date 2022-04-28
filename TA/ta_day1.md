> Episode entity 구현하기

팟캐스트의 에피소드에 해당하는 데이터 구조를 간략하게 만드시면 됩니다.

```ts
export class Episode {
  id: number;
  title: string;
  category: string;
  rating: number;
}
```

> Fakedb 및 podcast service 만들기

podcast service를 만들기 전에 모듈을 만듭니다.
nest cli를 사용하면 모듈 생성 및 등록을 편하게 할 수 있습니다. 콘솔) nest g mo podcast 콘솔) nest g s podcast
fake db는 솔루션과 같이 간단하게 배열로 정의합니다.

```ts
export class PodcastService {
  private podcasts: Podcast[] = [];
}
```

기본적으로 CRUD를 포함하여야 하므로, 솔루션과 같이 createPodcast, getAllPodcasts, getPodcast, updatePodcast, deletePodcast 등을 구현합니다.
모든 엔드포인트 작동하게 하기.
엔드포인트 작동은 controller에서 하도록 해야하기 때문에 podcast의 controller를 먼저 만듭니다.
콘솔) nest g co podcast

```ts
@Controller('podcasts')
export class PodcastsController
```

request, response를 핸들링하기 위해, nestjs 프레임워크에서는 controller를 이용합니다.
위의 코드처럼 @Controller('/podcasts') decorator를 지정해주면, podcast controller에서는 /podcast 경로로 들어오는 request, response를 다룰 수 있습니다.

> method 작성하기

```ts
@Get
@Post
@Patch(':/id')
@Delete(':/id')
```

http request method는 위와 같은 데코레이터를 이용하여 처리할 수 있습니다. @Post는 Create, @Get은 Read, @Patch는 Update, @Delete는 Delete를 각각 처리하는 데코레이터들입니다.

```ts
@Patch(':/id')
updatePodcast(
@Param('id') id :string,
@Body () updatePodcastDto,UpdatePodcastDto ){
return
this.PodcastService.updatePodcast(id, updatePodcastDto)
}
```

위의 @Patch와 @Delete 데코레이터를 보면 '/:id'라는 문자가 들어가있는데 url을 통하여 파라미터를 전달할 수 있습니다.
전달된 파라미터는 @Params(name)의 형태로 쉽게 받아올 수 있으며, @Body() 데코레이터에서는 리퀘스트의 body에 전달된 데이터를 데코레이터를 이용해서 쉽게 받아올 수 있습니다.
마지막으로 코드 안을 보시면 podcastService로 받은 data들을 넘겨주어서 처리하는 것을 볼 수 있는데, nestjs에서는 보통 위와 같이 controller에서 하는 역할과 service에서 하는 역할을 분리하여 코드를 처리합니다.
참고문서 : inject dependecy
https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EC%84%B1_%EC%A3%BC%EC%9E%85

위와 같은 방식으로 service와 controller들을 잘 조합하여, 과제에서 제시한 경로와 메소드에 맞게 모두 처리하시면 챌린지가 완료 됩니다.

> 결론
> 해당 경로 및 메소드 빼먹지 않게 잘 테스트(insomnia 등을 이용) 해보시면서, 하나씩 구현해 나가시면 무난하게 완료할 수 있는 챌린지 과제였습니다.
> 솔루션은 여러분들과 같이 챌린지를 같이 참여한 분들의 코드입니다. 솔루션이 정답은 아니기 때문에 절대적인 것은 아니고, 참고 정도로 봐주시길 바랍니다.
> 코드샌드박스에서 작업하기 어려우신 분들은, 블루프린트를 다운 받으신 후에 챌린지 과제를 하시고 나서 codesandbox cli를 통해서 코드 샌드박스에 쉽게 올리실 수 있습니다.
