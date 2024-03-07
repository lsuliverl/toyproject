const quotes = [
    {
        quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
        author: "미상",
    },
    {
        quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author: "존 우든",
    },
    {
        quote: "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
        author: "미상",
    },
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "월트 디즈니",
    },
    {
        quote: "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
        author: "미상",
    },
    {
        quote: "늘 하던 대로 하면 늘 얻던 것을 얻는다.",
        author: "미상",
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author: "윈스턴 처칠",
    },
    {
        quote: "애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다.",
        author: "속담",
    },
    {
        quote: "성공한 사람을 볼 때 당신은 대중에게 드러난 영예만 보지, 절대 그 영예를 얻기 위해 했던 개인적 희생은 보지 않는다.",
        author: "바입하브 샤",
    },
    {
        quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
        author: "크리스 그로서",
    },
    {
        quote: "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
        author: "토마스 에디슨",
    },
    {
        quote: "광기와 천재성 사이의 거리는 성공으로만 측정된다.",
        author: "브루스 페어스타인",
    },
    {
        quote: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
        author: "존 록펠러",
    },
    {
        quote: "게으른 예술가가 만든 명작은 없다",
        author: "미상",
    },
    {
        quote: "간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
        author: "롤리 다스칼",
    },
    {
        quote: "혁신이 지도자와 추종자를 가른다.",
        author: "스티브 잡스",
    },
    {
        quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
        author: "토마스 제퍼슨",
    },
    {
        quote: "모든 성취의 시작점은 갈망이다.",
        author: "나폴레온 힐",
    },
    {
        quote: "성공은 매일 반복한 작은 노력들의 합이다.",
        author: "로버트 콜리어",
    },
    {
        quote: "용기는 공포에 대한 저항, 공포의 지배이지 공포의 부재가 아니다.",
        author: "마크 트웨인",
    },
    {
        quote: "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
        author: "파블로 피카소",
    },
    {
        quote: "우리는 우리가 늘 생각하는 것이 된다. 그것이 가장 묘한 비밀이다.",
        author: "얼 나이팅게일",
    },
    {
        quote: "성공(success)이 노력(work)보다 먼저 나타나는 유일한 곳은 사전이다.",
        author: "비달 사순",
    },
    {
        quote: "삶에 진정한 흥미가 있고 호기심이 있는 삶을 살면 잠이 가장 중요한 것이 아니게 된다는 것을 발견했다.",
        author: "마사 스튜어트",
    },
    {
        quote: "성공으로 가는 길과 실패로 가는 길은 거의 똑같다.",
        author: "콜린 R. 데이비스",
    },
    {
        quote: "다음 세기를 바라보는 지금, 지도자들은 다른 사람들에게 힘을 주는 사람이 될 것이다.",
        author: "빌 게이츠",
    },
    {
        quote: "애초에 처한 상황의 포로가 되기를 거부할 때 성공으로 가는 첫 발을 내딛은 것이다.",
        author: "마크케인",
    },
    {
        quote: "위대한 일들을 이루기 전에 스스로에게 위대한 일들을 기대해야 한다.",
        author: "마이클 조던",
    },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;