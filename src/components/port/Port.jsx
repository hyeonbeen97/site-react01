import React from 'react';


const memberText = [
    {
        img: './assets/images/member/member02.jpg',
        title: '라파엘 나달',
        desc: '(Rafael Nadal)',
        a: '라파엘 나달(Rafael Nadal)은 스페인의 프로 테니스 선수로, 역대 가장 성공적인 테니스 선수 중 하나로 꼽힙니다. 그는 1986년 6월 3일에 스페인 바렐로나에서 태어났으며, 시절부터 탁월한 테니스 실력을 보였습니다. 나달은 특히 클레이 코트에서 뛰어난 실력으로 알려져 있으며, "클레이 코트의 왕"으로 불리기도 합니다. 2005년 롤랑 가로스 그랑슬램에서 우승하여 프로 경력 동안 무려 13번의 롤랑 가로스 우승을 차지하여 역대 가장 많은 클레이 코트 그랑슬램 우승 기록을 세웠습니다. 또한, 나달은 2008년 베이징 올림픽에서도 금메달을 획득하는 등 국제대회에서도 많은 성과를 거두었습니다.나달은 높은 집념과 강인한 체력, 저격적인 스피드와 강력한 스핀을 특징으로 하는 플레이 스타일로 유명합니다. 그의 경기력과 전문성, 철저한 훈련과 준비로 많은 팬들의 사랑을 받고 있으며, 테니스 역사상 가장 위대한 선수 중 하나로 인정받고 있습니다.',
    },
    {
        img: './assets/images/member/member01.jpg',
        title: '로저 페더러',
        desc: '(Roger Federer)',
        a: '로저 페더러(Roger Federer)는 스위스의 프로 테니스 선수로, 역대 최고의 테니스 선수 중 한 명으로 여겨지고 있습니다. 그는 1981년 8월 8일에 스위스 바젤에서 태어났으며, 테니스 경력 동안 많은 기록과 업적을 세웠습니다.페더러는 다양한 코트에서 탁월한 실력을 보여주는 범용성 있는 선수로 알려져 있습니다. 그는 서퍼 패이스의 쇼팽과 함께 최고의 기술과 우아함을 지닌 플레이어로 꼽히며, 특히 그의 백핸드 슬라이스와 정확한 발랄한 스트로크로 유명합니다.페더러는 그랑슬램 테니스 대회에서 20개의 싱글스 타이틀을 차지하여 기록을 세웠으며, 이는 역대 최다 타이틀 기록입니다. 그는 오스트레일리아 오픈, 프렌치 오픈, 윔블던, 미국 오픈 등 모든 그랑슬램 대회에서 우승한 선수로서 "캘린더 그랜드 슬램"을 이룬 세 명 중 한 명입니다. 또한, 그는 ATP 월드 투어 파이널을 6번 우승하였으며, 310주 동안 세계 랭킹 1위를 유지한 기록도 가지고 있습니다.로저 페더러는 그의 탁월한 기량과 경기력으로 많은 사람들의 사랑을 받고 있으며, 테니스 역사상 가장 위대한 선수로 존경받고 있습니다. 그는 또한 선수로서의 우아함과 예의 바른 태도로도 알려져 있으며, 스포츠맨십의 모범 사례 중 한 명으로 손꼽힙니다.',
    },
    {
        img: './assets/images/member/member03.jpg',
        title: '노바크 조코비치',
        desc: 'Novak Djokovic)',
        a: '노바크 조코비치(Novak Djokovic)는 세르비아의 프로 테니스 선수로, 현재까지 많은 기록과 업적을 세운 세계 랭킹 1위 플레이어입니다. 그는 1987년 5월 22일에 세르비아 베오그라드에서 태어났으며, 어릴 때부터 뛰어난 테니스 실력을 보여주었습니다.조코비치는 모든 코트에서 뛰어난 기술과 체력을 지닌 선수로 알려져 있으며, 강력한 서브와 지속적인 수비 능력으로 유명합니다. 그는 다른 두 위대한 선수인 로저 페더러와 라파엘 나달과 함께 "빅 쓰리"로 불리는 세 명의 엘리트 선수 중 한 명으로 꼽히며, 현대 테니스의 가장 큰 경쟁자들 중 한 명입니다조코비치는 그랑슬램 대회에서 20개의 싱글스 타이틀을 차지하여 로저 페더러와 라파엘 나달과 함께 역대 최다 타이틀 보유자 중 하나입니다. 그는 2021년에 롤랑 가로스를 우승하여 그랑슬램 테니스 역사상 첫 번째 "골든 그랜드 슬램"을 달성한 선수로서, 4대 그랑슬램 대회를 모두 한 해에 우승한 세 명 중 한 명입니다.또한, 조코비치는 ATP 월드 투어 파이널과 마스터스 1000 시리즈 대회에서도 다수의 우승을 차지하였으며, 세계 랭킹 1위에 340주 동안 머물며 이 역시 역대 최다 기록입니다.노바크 조코비치는 그의 탁월한 실력과 경기력으로 많은 사람들의 인정을 받고 있으며, 테니스 역사상 가장 위대한 선수 중 한 명으로 존경받고 있습니다.',
    },
];
function Memberintro({ img, title, desc, a }) {
    return (
        <div className="member">
            <div className="member__body">
                <h4 className="title">{title}</h4>
                <p className="desc">{desc}</p>
            </div>
            <figure className="member__header">
                <img src={img} alt="선수" />
                <p>{a}</p>
            </figure>
        </div>
    );
}

function Port(props) {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>세계적인 선수 소개</h3>
            <p>세계적으로 인정받는 테니스 선수</p>
            <div className="member__inner container">
                {memberText.map((text, index) => (
                    <Memberintro
                        key={index}
                        img={text.img}
                        title={text.title}
                        desc={text.desc}
                        a={text.a}
                    />
                ))}
            </div>
        </section>
    );
}
export default Port;