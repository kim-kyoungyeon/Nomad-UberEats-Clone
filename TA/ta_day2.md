> Resolver 파일 만들기

`src/podcast/podcasts.resolver.ts`

```ts
@Resolver((Of) => Podcast)
export class PodcastREsolver {
  constructor(private readonly podcastsService: PodcastService) {}
}
//query로 데이터 받아옴
@Query((returns)=> [Podcast])
getAllPodcasts(){
    return this.podcastsService.getAllPodcasts();
}

//mutation?f GraphQL focus on data fetching,
//arg?
//Dto?

@Mutation((returns)=> CoreOutPut)
createPodcast(@Args('input')createPodcastDto:
CreatePodcastDto):CoreOutPut{
    return
    this.podcastService.createPodcast(createPodcastDto)
}
```

resolver파일을 수동으로 만드셔도 되고, 또는 nest g r podcst와 같이 nest cli를 이용하셔도 무방합니다. cli를 이용하면 자동으로 모듈에 등록되지만 수동으로 만드셨으면, 꼭 module의 provider에 resolver를 등록 시켜주셔야 합니다. 후에 위와 같이 resolver파일에 정의하시고 class를 만드시면 됩니다(cli는 자동).
PodcastResolver를 보면 constructor가 뭔가 익숙치 않으실 수도 있습니다.
참고 문서 : typescript의 parameter properties
https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties

Query나 Mutation의 리턴값은 ObjectType, scalar type 등 여러가지 형태가 될 수 있습니다.
솔루션에서는 getAllPodcasts query는 Podcast의 배열형태로 오브젝트타입 값을 리턴 해주고, createPodCast는 리턴 값으로 자주 사용하는 형태로 CoreOutput이라는 오브젝트 타입을 만들어서 값을 리턴해주었습니다.

> InputType

graphql의 mutation을 사용할 때에는 간단한 scalar를 사용할 수 있지만, object 형식인 input type을 이용할 수도 있습니다.
https://graphql.org/learn/schema/#input-types

nest js에서는 `@InputType decorator`를 이용하여 input type을 사용합니다.
InputType과 ObjectType을 동시에 사용할 때 주의할 점.

```ts
@InputType('EpisodeInput', { isAbstracgt: true })
@ObjectType()
export class Episode {
  @Field((_) => Number)
  id: number;
  @Field((_) => String)
  title: string;
  @Field((_) => Number)
  category: string;
}
```

위의 Episode class를 보시면 ObjectType과 InputType 데코레이터가 동시에 올려져있습니다. 그런데, InputType에는 EpisodeInput이 들어가있고, ObjectType에는 들어가있지 않습니다. 이유는 둘다 아무것도 적지 않으면 에러가 발생하기 때문입니다.

nestjs에서 @InputType과 @ObjectType 등의 데코레이터가 들어간 클래스들을 SDL로 변환하면서 자동으로 클래스 이름으로 type 또는 input 등의 타입들로 변환하는데, 이름이 고유해야 합니다.

따라서 만약` @InputType()@ObjectType() class Episode` 라하면, 스키마 파일에는 type Episode, input Episode가 생성될 것인데, 이렇게 되면 같은 이름이 존재하기 때문에 에러가 발생합니다.

그래서 솔루션에서는 @InputType에 EpisodeInput으로 지정해주어서 input EpisodeInput으로 만들어지게끔 이름을 넣어준 것입니다.

`@Args(name, options?: { type, defaultValue, description, .., nullable})`
Args는 query나 mutation의 argument에 해당하는 부분입니다. query나 mutation은 기본적으로 name을 options에서 지정해주지 않아도, 자동으로 해당 query, mutation resolver에 있는 메소드 이름으로 대체하지만, Args는 이름이 없으면 다른 의미로 사용 됩니다. ArgsType에 해당하는 내용입니다.

https://docs.nestjs.com/graphql/resolvers#dedicated-arguments-class

> DTO 설정.

보통 nestjs에서는 결과들은 `@ObjectType`, 입력들은 `@InputType`으로 사용합니다. 또한 본 솔루션처럼 많이 사용하는 부분들은 `src/podcast/dtos/output.dto.ts`처럼 CoreOutput 형태로 만들어서 직접 또는 상속 받아서 많이 사용합니다.
상속과 관련하여 DTO에서 눈여겨 봐야 할 부분은 아마도 mapped types 가 아닐까 합니다. Partial, Pick, Omit, Intersection 등이 정의되어 있습니다.
앞으로도 백엔드를 쭈욱 다루거나, 우버이츠 강의 코드를 만드시거나 할 때 DTO를 많이 다루실 건데, 잘 알아 두시면 좋을 것 같습니다.

# 결론

이번 챌린지에서는 nestjs에서 graphql을 사용하는 부분으로 전반적인 내용은 전번 챌린지와 내용이 많이 겹치므로, 내용이 익숙하여 쉬운 편에 속한 챌린지였습니다.
챌린지가 진행되면서 블루프린트나 솔루션에 여러 사람의 손이 타서 일관되지 않을 수 있습니다. 또한, 솔루션이 꼭 100% 정답은 아닙니다만, 여러 사람들의 코드를 볼 수 있는 좋은 기회입니다.
