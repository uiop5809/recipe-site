import { useState } from "react";
import AppStateContext from "./../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  // 기본 props
  const [recipes] = useState([
    {
      id: "kr-01",
      title: "닭볶음탕",
      subtitle: "Dak-bokkeum-tang",
      desc: "닭볶음탕 또는 닭도리탕은 형태상 조림에 가까운 한국의 요리이다. 토막 낸 닭고기를 고추장, 고춧가루, 간장, 파, 마늘 등의 양념으로 볶거나 약간의 국물을 남기고 졸여 만든다. 부재료로는 주로 큼직하게 썬 감자, 양파, 당근 등이 같이 들어간다. 20세기 초에 평양 등 관서 지방에서부터 유래된 것으로 추정되고 있는데, 이름을 놓고 논란이 많은 음식이다.",
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMTlfMjM1%2FMDAxNjM5OTA1MzQ1MjU3.i9xuLJ76VvwcGKZziJiNBgwdSMib6WDUQqIXvFTkNNwg.3LBar1WWCBpP5dZLQcGY6rM-H2shhZ9K72QpyhUeo0wg.JPEG.osumorao%2F1D6A3586%25A3%25AD01.jpeg&type=sc960_832",
      totalTime: 60,
      ingredients: [
        "토막 닭고기 1마리(10호)",
        "물 3컵(540ml)",
        "대파 2대(200g)",
        "청양고추 3개(30g)",
        "홍고추 2개(20g)",
        "새송이버섯 2개(120g)",
        "표고버섯 2개(40g)",
        "당근 1/3개(90g)",
        "양파 1개(250g)",
        "감자 2개(400g)",
        "간 마늘 1큰술(15g)",
        "굵은 고춧가루 1/2컵(40g)",
        "고운 고춧가루 1큰술(6g)",
        "진간장 4/5컵(144ml)",
        "황설탕 3큰술(36g)",
        "후춧가루 약간",
      ],
      step: [
        {
          content:
            "당근 고구마, 감자는 큼직하게 잘라주고, 양파는 4등 분 한 후에 3등분 하세요.",
          time: 300,
        },
        {
          content:
            "닭을 한 번 삶아 비린내를 완전히 제거를 하고 식초와 미림, 통후추, 월계수잎을 넣고 부르르 끓어오르면 건져 찬물에 깨끗이 헹굽니다. ",
          time: 30,
        },
        {
          content:
            "닭들이 잠길만큼의 물(약540ml 물 3컵)을 붓고 센불을 올린 후 제일먼저 황설탕 3큰술을 넣어요. ",
          time: 60,
        },
        {
          content: "감자, 당근 양파를 넣어 주세요. ",
          time: 300,
        },
        {
          content:
            "새송이버섯, 표고버섯을 넣어준다. 파와 고추도 크게 뚝뚝 썰어 준비해요.",
          time: 900,
        },
        {
          content:
            "굵은 고춧가루, 고운 고춧가루를 넣고 섞는다. 진간장, 간 마늘, 후춧가루를 넣고 잘 섞은 후 끓여준다.",
          time: 90,
        },
        {
          content:
            "대파, 홍고추, 청양고추를 넣고 섞은 후 숨이 죽을 정도로만 끓여준다",
          time: 60,
        },
        {
          content: "불을 꺼주고 접시에 담아 맛있게 먹는다",
          time: 60,
        },
      ],
    },
    {
      id: "kr-02",
      title: "된장찌개",
      subtitle: "Soybean Paste Stew",
      desc: "물에 된장을 풀고 소고기나 조개류로 국물 맛을 내면서 두부, 감자, 호박 등의 재료를 넣어 끓인 음식이다. 한국인에게 된장찌개는 ‘집밥’에 대한 향수를 대변하는 음식 중 하나일 만큼 일상적이다. 또한 ‘뚝배기보다 장맛’이라는 한국 속담도 있는데, 이는 겉모양은 보잘 것 없으나 내용은 훨씬 훌륭함을 이르는 말로서 된장에 대한 한국인의 애정이 담긴 표현이다.",
      coverImg:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F33%2Fb6%2Fb3%2F33b6b33d9e37a2b695e28537e241077a.jpg&type=sc960_832",
      totalTime: 30,
      ingredients: [
        "두부 1/2모",
        "된장 3T",
        "쌈장 3T",
        "고춧가루 2T",
        "물 400ml",
        "대파(생략 가능)",
        "버섯(생략 가능)",
        "감자(생략 가능)",
      ],
      step: [
        {
          content: "재료를 준비합니다.",
          time: 60,
        },
        {
          content: "우선 양파를 작은 큐브모양으로 썰어줍니다.",
          time: 60,
        },
        {
          content:
            "냄비에 썰어둔 호박, 양파, 다시마를 넣어줍니다. 쌀뜨물도 넣어주세요.",
          time: 180,
        },
        {
          content: "물이 끓으면 다시마는 건져서 버려줍시다.",
          time: 300,
        },
        {
          content: "야채가 거의 익으면 양념들을 모두 넣어줍니다.",
          time: 60,
        },
        {
          content: "마지막에 두부를 넣어줍니다.",
          time: 60,
        },
        {
          content:
            "대파, 홍고추, 청양고추를 넣고 섞은 후 숨이 죽을 정도로만 끓여준다",
          time: 60,
        },
        {
          content: "두부가 위로 떠오르면 완성!",
          time: 60,
        },
      ],
    },
    {
      id: "kr-03",
      title: "김치찌개",
      subtitle: "kimchi stew",
      desc: "오래된 음식은 상해서 버리는 게 상식이지만 묵으면 묵을수록 좋은 식재료가 되는 게 바로 김치다. 겨울철 저장식품인 김장김치는 봄이 지나면 지나치게 물러져 신맛 때문에 그냥 먹기가 어려워진다. 이때 신김치로 만들 수 있는 최적의 요리가 김치찌개다. 갓 담근 신선한 김치도 별미지만 신김치로 만드는 김치찌개는 찌개 요리의 최고봉이다.",
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMzFfMTY5%2FMDAxNjQzNjMxNjMzNTEz.Z39uFI9YW7g7IwsPhY5rL7EzQmY9ZE_M4y6h4OL8ZNAg.eTXClBm_Yx7rT85wCfnSJFsI45OAb30l0B4rsaVFlgMg.JPEG.crispynote%2F717A6949.jpg&type=sc960_832",
      totalTime: 20,
      ingredients: [
        "신김치 1국그릇",
        "참치 1캔",
        "고추가루 1스푼",
        "물 400ml",
        "대파 1뿌리",
        "식용유 3스푼",
        "김치국물 3스푼",
      ],
      step: [
        {
          content:
            "김치 국그릇 가득 담은 걸 냄비에 옮겨주세요. 혹시 신김치가 없으신 분들은 김치 위에 식초를 한스푼 뿌려 10분 정도 놓아주세요",
          time: 60,
        },
        {
          content:
            "식용유 3스푼을 김치위에 돌돌 돌려 뿌려주신 다음 약-중 중간 불에서 달달 볶아주세요 볶아주다보면 김치가 이쁜 주황빛으로 변하는 걸 보실 수 있을거에요",
          time: 180,
        },
        {
          content:
            "다음 참치 1캔을 함께 넣어 달달 볶아주세요. 이 때 참치캔 기름은 버리지마시고 함께 넣어주세요",
          time: 180,
        },
        {
          content: "물 400ml를 넣어 끓여주세요",
          time: 30,
        },
        {
          content: "다음 김치국물 큰 국자로 3스푼 넣고 팔팔 끓여줍니다",
          time: 300,
        },
        {
          content:
            "계속 끓이다가 대파 한뿌리 송송 썰어주신 걸 넣어주세요~ 다진 마늘 좋아하시면 다진마늘 티스푼으로 1스푼 넣어주셔도 좋아요",
          time: 120,
        },
        {
          content:
            "마지막으로 김치찌개 색감을 더 이쁘게, 그리고 얼큰하게 해주기위해 고추가루 1스푼을 넣어준 다음 끓여주시면 끝~",
          time: 120,
        },
        {
          content: "불을 꺼주고 접시에 담아 맛있게 먹는다",
          time: 60,
        },
      ],
    },
    {
      id: "jp-01",
      title: "가츠동",
      subtitle: "Katsudon",
      desc: "가츠동 또는 카츠동(일본어: カツ丼 가쓰돈[*])은 그릇에 담은 밥 위에 돈카쓰를 얹은 일본의 덮밥 요리이다. 이름은 돈카쓰를 사용한 덮밥 요리라는 것에서 유래했다.",
      coverImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Katsudon_and_miso_soup_by_jetalone.jpg/440px-Katsudon_and_miso_soup_by_jetalone.jpg",
      totalTime: 30,
      ingredients: [
        "시판 돈가쓰 1장",
        "양파 1/2개",
        "계란 2개",
        "대파 반뿌리",
        "밥 1공기",
        "간장 40ml",
        "맛술 40ml",
        "설탕 22ml",
        "물 150ml",
      ],
      step: [
        {
          content:
            "돈가스를 기름에 굽거나 튀겨주세요. 돈가스는 튀기는 것이 바삭하니 더 맛있는 것 같아요.(취향껏 요리해주세요)",
          time: 30,
        },
        {
          content:
            "돈가스를 튀겨내는동안 양파를 잘라주고, 쪽파를 쫑쫑 썰어주었어요. 계란2개도 풀어주시고요.",
          time: 270,
        },
        {
          content: "잘 튀겨진 돈가스는 거름망에 올려 기름을 좀 빼주시고요.",
          time: 30,
        },
        {
          content:
            "다른 냄비에 물+간장+맛술+설탕을 넣어서 덮밥소스를 만들어주세요. 물 150ml + 간장 40ml + 맛술 40ml + 설탕 22ml 로 만들었어요.",
          time: 30,
        },
        {
          content: "만들어진 덮밥소스에 양파를 넣어 같이 끓여주세요.",
          time: 300,
        },
        {
          content:
            "양파가 반 정도 익어가면 돈가스를 잘라서 가운데 올려주시고요. 그 옆으로 계란물을 빙~ 둘러주세요.",
          time: 60,
        },
        {
          content:
            "마지막으로 쪽파를 뿌려 올려주시면 됩니다. 그리고 불을 끄고남은 잔열로 계란을 익혀주시면 되요. 계란이 너무 많이 익으면 식감이 거칠어(?) 지니 약간만 익혀주세요.",
          time: 30,
        },
        {
          content: "뜨거운 밥 한 그릇 위에 올려서 맛있게 드세요~",
          time: 60,
        },
      ],
    },
    {
      id: "jp-02",
      title: "소바",
      subtitle: "soba",
      desc: '일본식으로 조리된 메밀로 만든 국수. 엄밀히 말하면 일본어로 소바(そば)는 그 자체로 "메밀"이라는 뜻으로 메밀의 낱알을 가공해서 만든 메밀 가루(소바분)로 만든 면이라 "소바멘"이라고 부르다가 자연스럽게 "소바"로 굳은 것이다.',
      coverImg:
        "http://th2.tmon.kr/thumbs/image/87a/d0b/18e/a4ced67f0_700x700_95_FIT.jpg",
      totalTime: 30,
      ingredients: [
        "무 한토막",
        "쪽파",
        "고추냉이",
        "김가루",
        "오이",
        "쌈무",
        "쯔유",
        "냉수",
      ],
      step: [
        {
          content: "쯔유와 냉수를 2:3의 비율로 섞어 잠시 냉동실에 넣어둔다.",
          time: 60,
        },
        {
          content:
            "무 한토막을 강판에 간다. 이때 무의 뿌리쪽 초록부분을 가는 것이 맛이 더 좋아요 맛이 더 달기 때문에 무를 생으로 즐기실 때는 초록부분을 사용하세요",
          time: 300,
        },
        {
          content:
            "간 무를 고운 체에 넣고 생수를 뿌려 헹구면서 매운맛을 씻겨낸다.",
          time: 180,
        },
        {
          content: "고추냉이 가루를 찬물에 갠다. 비율은 1:1 정도",
          time: 120,
        },
        {
          content:
            "쌈무는 얇게 썰고 오이는 곱게 채썰고 쪽파는 송송 썰어 준비한다.",
          time: 180,
        },
        {
          content:
            "재료준비하는 동안 면 삶을 물을 올려 끓으면 면을 삶아내 찬물에 여러번 헹궈 전분기를 제거한다.",
          time: 1800,
        },
        {
          content:
            "냉동실에 넣어두었던 그릇을 꺼내 면을 담고 면 위에 준비한 재료들을 올린 후 얼음을 담는다.",
          time: 60,
        },
        {
          content: "쯔유를 희석한 물을 담고는 김가루와 쪽파를 뿌려낸다.",
          time: 60,
        },
      ],
    },
    {
      id: "jp-03",
      title: "오꼬노미야끼",
      subtitle: "Okonomiyaki",
      desc: '오코노미(お好み)는 일본어로 취향이란 뜻이다. 야키는 구이라는 뜻으로 한국어로 직역하면 "취향빵", "취향전" 정도로 번역할 수도 있다. 밀가루를 가쓰오부시 우린 물에 개어 잘게 썬 양배추를 섞은 후 취향 따라 각종 재료를 넣고 지져 먹는 일본 요리',
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDVfMTI3%2FMDAxNjQ2NDY3NTY3NTA2.i0nednSx7pjQjRQB-kGtExWApVBTOgsBo7vQYxkpzeAg.HQJ61EVjPShdtvY6OsuH9QLOnCzSp3zdpTH_sW4f8swg.JPEG.bora170301%2F20220304%25A3%25DF183811.jpg&type=sc960_832",
      totalTime: 15,
      ingredients: [
        "달걀 4개",
        "양배추 1/4통",
        "부침가루 1/2컵",
        "참치캔 1개",
        "양파 1/2개",
        "식용유 적당량",
        "케찹 or 데리야끼소스",
        "마요네즈",
        "가쓰오부시가루",
      ],
      step: [
        {
          content:
            "양배추는 가늘게 채썰어주세요. 칼질을 잘 못하는 분들은 감자필러로 긁어도 좋아요. 양배추샐러드도 이렇게 만들면 식감이 좋아서 평소보다 많이 먹게 되더라고요. 돈가스집에서 주는 양배추샐러드 느낌으로~",
          time: 300,
        },
        {
          content:
            "양파 채썰고~ 참치는 기름기를 쫙 빼주세요. 참치 대신에 베이컨, 소세지, 오징어, 새우 등등 집에 있는 해산물, 육류 아무거나 다 넣으세요. 이건 말그대로 냉털레시피니까요 ㅋㅋ",
          time: 180,
        },
        {
          content:
            "큰 볼에 양배추, 양파, 참치, 달걀 4개, 부침가루 1/2컵 넣고 잘 섞어주세요.",
          time: 180,
        },
        {
          content:
            "팬을 중불로 예열하고 식용유 넉넉히 둘러주고 양배추부침개 반죽 2국자 올려요. 보통 부침개보다는 약간 두툼하게 부치면 좋아요 오코노미야끼 느낌으로 부치는거니까요~ 지글지글 양배추전 움짤 벌써 맛있겠죠? 참치가 들어가서 고소한 향기가 풍겨요!",
          time: 300,
        },
        {
          content:
            "부침개의 가장자리가 익은 걸 확인하면 뒤집은 후 뒤집개로 꾹꾹 눌러주세요. 부침개가 두꺼워서 이렇게 눌러줘야 잘 익어요. 꾸욱~꾸욱~ 뒤집개 움짤! 불을 매우 약하게 줄이고~ 뚜껑을 덮고 4~5분가량 더 익혀주면 끝! 이렇게 후라이팬 뚜껑을 덮어야 속까지 열전달이 잘 되어서 잘 익더라고요.",
          time: 600,
        },
        {
          content:
            "부침개에 소스 바르기 양배추전에 마요네즈 1큰술 펴바르고 데리야끼소스 혹은 케첩을 뿌려주세요. 아이들은 케첩~ 저랑 신랑은 데리야끼소스를 좋아해요.^^ 데리야끼소스 대신 단짠단짠 돈까스소스도 괜찮아요. 마요네즈와 데리야끼소스를 뿌리면 맛이 한단계 업그레이드 됩니다. 데리야끼소스는 아기약병에 담아서 뿌리면 비쥬얼이 더 이쁘게 나와요.",
          time: 120,
        },
      ],
    },
    {
      id: "ch-01",
      title: "짜장면",
      subtitle: "jajangmyeon",
      desc: "여러 가지 다진 야채와 돼지고기를 넣고 식용유와 중국 된장(춘장)으로 볶은 양념을 국수와 비벼 먹는 한국식 중화요리이다. 본래 짜장면은 중국어로 자지앙미엔(Zhajiangmian, 炸醬麵)이라고 표기하며, 장(醬)을 볶아 면과 함께 먹는다는 뜻을 가지고 있다.",
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTRfNjcg%2FMDAxNjQ5OTE4MDk2ODAw.999AhCxcqid4iu5inrOK6BLe4IgePO3VBXqr6zcLbwMg.LABam6jPKpH7367h0W0DjWgy5hEGqrd8VOsaqTLnz4sg.JPEG.wjsrnrgud0326%2FIMG_7710.jpg&type=sc960_832",
      totalTime: 20,
      ingredients: [
        "돼지고기 400g",
        "양파 중 2개",
        "양배추 1/4개",
        "호박 1/2개",
        "당근 1/2개",
        "완두콩 약간",
        "칼국수면 500g",
        "짜장가루 1컵",
        "포도씨유 1/2컵",
        "생강즙 1/2스푼",
        "간마늘 1/2스푼",
      ],
      steps: [
        { content: "양배추,양파,당근,호박을 잘게 썰어 놓습니다.", time: 300 },
        {
          content:
            "포도씨유를 넣어 뜨겁게 달군 후라이팬에 돼지고기를 튀기듯 볶다가 생강청(생강즙)과 간마늘을 넣어줍니다(고기냄새 제거)",
          time: 500,
        },
        { content: "잘볶아진 돼지고기에 양파를 넣어 볶습니다.", time: 600 },
        {
          content: "양파가 갈색이 날때까지 볶습니다. 양파의 풍미가 살아나요.",
          time: 1000,
        },
        { content: "준비한 야채들도 넣어 잘 볶아줍3니다.", time: 500 },
        {
          content:
            "야채가 숨이죽고 수분이 나오면 짜장가루를 조금씩 나눠 넣으며 덩어리지지않게 볶아줍니다.",
          time: 200,
        },
        {
          content: "짜장이 너무 되면 물을 반컵만 넣어 짜장을 완성합니다.",
          time: 200,
        },
        {
          content: "냄비에 물을 넉넉히 붓고 칼국수면을 삶아줍니다.",
          time: 500,
        },
        { content: "잘 삶아진 면을 건져 그릇에 담고", time: 60 },
        {
          content:
            "짜장을 올려 짜장면을 완성합니다. 삶은 완두콩도 올려 더욱 맛나게보입니다.",
          time: 60,
        },
      ],
    },
    {
      id: "ch-02",
      title: "짬뽕",
      subtitle: "champon",
      desc: "중국말로는 차오마몐이라고 부른다. 이 요리는 해물 또는 고기와 다양한 야채를 기름에 볶아 닭이나 돼지뼈로 만든 육수를 넣고 매콤하게 끓인 다음 면을 말아 먹는 중국요리이다. 원래 돼지고기, 표고버섯, 죽순, 파 등을 넣고 끓인 국물에 국수를 넣어 먹은 탕러우쓰[湯肉絲麵]에서 유래한 음식이며 고춧가루를 넣지 않고 시원하게 끓여 후춧가루만 넣어 먹었다.",
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDhfMTM2%2FMDAxNjQ0MzAyNDgwNjMy.p5E0o1nrSDyuEMhEfIlKhbMCwfRZR96mLiPK2M4kJFkg.aZrI_Uhb5tsKA1tNoTr0lv8da0cyK7nFRG22hLpQIz4g.JPEG.myssssu%2FIMG_7189.jpg&type=sc960_832",
      totalTime: 30,
      ingredients: [
        "면 2인분",
        "오징어 50g",
        "냉동 칵테일새우 12마리",
        "무 80g",
        "청경채 1줌",
        "새송이 1/2개",
        "양파 1/2개",
        "배춧잎 2장",
        "당근 약간",
        "대파 흰부분 1뿌리",
        "마늘 5쪽",
        "고추기름 1.5T",
        "굴소스 1T",
        "고추가루 1T",
        "멸치육수 4.5컵",
        "해물맛선생 1.4ts",
        "소금 약간",
        "후추 약간",
      ],
      steps: [
        {
          content:
            "먼저 재료를 준비합니다. 전 오징어를 오징어 회 남은걸루 했어요. 갑오징어를 큼직하게 썰어서 사용하셔도 돼요.",
          time: 60,
        },
        {
          content:
            "웍에 고추기름을 두릅니다. 전 고추기름이 없어서 식용유에 고춧가루를 섞고 전자렌지에 1분~1분 30초 돌린 후 걸러서 사용했어요.",
          time: 90,
        },
        {
          content: "대파와 편으로 썬 마늘을 넣고 강한 불에 볶아서 향을 냅니다.",
          time: 120,
        },
        {
          content: "야채들을 넣습니다.",
          time: 60,
        },
        {
          content: "오징어와 새우를 넣고 볶다가 굴소스를 넣고 볶아줍니다.",
          time: 300,
        },
        {
          content:
            "야채와 해물이 살짝 볶아지면 멸치육수를 넣고 고춧가루를 취향껏 넣고 소금과 후추로 식성대로 간을 합니다. 요대로도 맛있지만 중국집 맛에 좀 더 가까워지고자 해물 맛선생을 쬐금 넣었어요.",
          time: 600,
        },
        {
          content:
            "면이 있는 줄 알고 봤더니 라면사리 밖에 없더라구요. 그래서 짬뽕라면이 되버렸어요. 중화면이나 칼국수 등 면은 드시고 싶은 걸루 준비하세요.	",
          time: 300,
        },
        {
          content: "완성입니다! 이젠 짬뽕 집에서 만들어 드세요.",
          time: 60,
        },
        { content: "9. 잘 삶아진 면을 건져 그릇에 담고", time: 60 },
      ],
    },
    {
      id: "ch-03",
      title: "탕수육",
      subtitle: " Sweet and Sour Pork",
      desc: "탕수육(糖水肉)은 돼지고기에 녹말을 묻혀서 튀긴 것에 식초, 간장, 설탕, 야채, 녹말물 등을 넣고 끓여 만든 소스를 곁들여 먹는 중국 탕추 요리다.",
      coverImg:
        "http://gdimg.gmarket.co.kr/1505867149/still/600?ver=1623821295",
      totalTime: 40,
      ingredients: [
        "돼지고기안심 300g",
        "소금 약간",
        "후추 약간",
        "계란 노른자 1개",
        "감자전분 100%",
        "파프리카(색깔별로) 각 0.5개씩",
        "양파 0.5개",
        "포도씨유 250cc",
        "물 250cc",
        "레몬가루 3T",
        "설탕 3T",
        "소금 약간",
        "포도씨유 1T",
        "감자전분 0.5T",
      ],
      steps: [
        {
          content:
            "100% 감자전분을 통에 담아 물을 넣고 저어요. 4시간 동안 가만히두고 가라앉혀 주세요.",
          time: 14400,
        },
        {
          content: "윗물은 따라 버리고 젖은 전분을 준비해요.",
          time: 60,
        },
        {
          content:
            "돼지고기 안심을 손가락 굵기로 썰어주세요.(사실 때 부탁해서 썰어오면 좋아요.) 비닐봉지에 담아 소금, 후추 뿌려 30분 재워주세요.",
          time: 1800,
        },
        {
          content:
            "그동안 나머지 재료를 준비해요. 파프리카, 양파 다듬고 계란 노른자 준비하구요. 물, 레몬가루, 설탕, 소금을 타둡니다. 전분물은 2번에서 1/2T 가져와 물과 섞어주세요.",
          time: 300,
        },
        {
          content:
            "자~밑간한 고기에 노른자 넣고 봉지를 오므려 조물조물! 젖은 전분 넣고 주물주물! 잘 주물러 주세요. ※여기서 포도씨유 1T를 넣으면 튀길때 고기를 떼어내기가 더 쉬워요.",
          time: 300,
        },
        {
          content:
            "팬에 포도씨유를 넣고 튀겨주세요. ※가스렌지-중불/인덕션-튀김180도 아래가 노릇해지면 한번 뒤집어주세요. 망에 꺼내요.",
          time: 600,
        },
        {
          content:
            "팬에 6번의 뜨거운 기름 2T 넣고 채소 넣어 잠깐 볶다가 준비해둔 소스물을 부어주세요. 끓으면 전분물 휘저으며 넣고 걸쭉해지면 고기 넣어 뒤섞어주세요. 바로 불을 꺼주세요.",
          time: 300,
        },
        {
          content:
            "그릇에 담아 보세요. 상큼하고 깔끔해서 국물 한방울까지 정~~~말 맛있답니다.^^",
          time: 60,
        },
      ],
    },
    {
      id: "we-01",
      title: "베이컨 토마토 파스타",
      subtitle: "Bacon tomato pasta",
      desc: "파스타는 밀가루와 물을 주재료로 하여 만든 반죽을 소금물에 넣고 삶아 만드는 이탈리아의 요리를 총칭하는 음식이다. 이미 기원전 1세기경부터 라자냐를 먹은 기록이 있으며 그 이전 시대의 자료에서 파스타와 관련한 그림이 발견되는 것으로 보아 이탈리아의 파스타는 매우 오래전부터 먹어온 것으로 추정된다.",
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MjJfMTUw%2FMDAxNTY2NDUxMDQwODk5.3hY--8hA40tNLJDsreYGdb-SK7AeDQ4ddhVPa1lZQCcg.50WtM7zmu5OIqwYfShO_wFz7LK_d5uuub09sxCyg4lcg.JPEG.tldms4635%2FIMG_4425.jpg&type=sc960_832",
      totalTime: 30,
      ingredients: [
        "파스타면 1줌",
        "베이컨",
        "토마토소스(폰타나) 1/2통",
        "양파 1/2개",
      ],
      steps: [
        {
          content: "양파와 베이컨은 먹기 좋은크리고 잘라주세요",
          time: 180,
        },
        {
          content: "옴폭한 냄비에 물넣고 기름 살짝 넣어 팔팔 끓이다가",
          time: 300,
        },
        {
          content: "파스타면을 넣어서 7~10분 끓여줍니다",
          time: 600,
        },
        {
          content:
            "면이 익을동안 베이컨토마토소스를 만들어줍니다. 베이컨과 양파넣고 볶아주다가",
          time: 300,
        },
        {
          content: "파스타면 끓이고 있는 면수를 살짝 넣어서 좀더 볶아주다가",
          time: 300,
        },
        {
          content: "토마토소스(폰타나 소스) 반통 넣고 잘 섞어줍니다.",
          time: 300,
        },
        {
          content:
            "이제 잘 익은 파스타면을 베이컨 토마토 소스에 넣고 비벼주듯이 3~5분 볶아주면 완성된답니다~",
          time: 300,
        },
      ],
    },
    {
      id: "we-02",
      title: "봉골레 파스타",
      subtitle: "Spaghetti alle Vongole",
      desc: "파스타는 밀가루와 물을 주재료로 하여 만든 반죽을 소금물에 넣고 삶아 만드는 이탈리아의 요리를 총칭하는 음식이다. 이미 기원전 1세기경부터 라자냐를 먹은 기록이 있으며 그 이전 시대의 자료에서 파스타와 관련한 그림이 발견되는 것으로 보아 이탈리아의 파스타는 매우 오래전부터 먹어온 것으로 추정된다.",
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMTNfMjU2%2FMDAxNjM2NzY3Mjc0NjE4.FNShEUJapVomSlRIOkrsNuN2DsPt4qH1Ps0PXfMkjrAg.VhalHy2d08CYhjGpNP9s7nX6FAZmXapRn0BbWPZs5uwg.JPEG.smile-jin%2FIMG_8157.jpg&type=a340",
      totalTime: 30,
      ingredients: [
        "스파게티 160g",
        "마늘 5쪽",
        "양파 1/2개",
        "이태리 파슬리 약간",
        "화이트 와인 1/3컵",
        "소금 약간",
        "바지락 500g",
        "방울토마토 6개",
        "페페론치노(건고추) 4개",
        "올리브오일 5큰술",
        "스파게티 삶은 물 1/4컵",
        "후추 약간",
      ],
      steps: [
        {
          content:
            "재료를 준비해주세요. 바지락은 흐르는 물에 비벼 깨끗이 씻은 후, 약간의 소금을 넣은 물에 담가 해감 해주세요.",
          time: 300,
        },
        {
          content:
            "마늘은 편으로 썰고, 방울토마토는 2등분 해두고, 양파, 페페론치노, 이태리 파슬리는 굵게 다져주세요.",
          time: 300,
        },
        {
          content:
            "물 8컵에 굵은 소금 1/2큰술을 넣어 스파게티면을 6분 정도 삶고, 넓은 그릇에 펼친 후 올리브오일을 뿌려주세요. (면 삶은 물 1/4컵은 남겨두세요.)",
          time: 600,
        },
        {
          content:
            "팬에 올리브오일을 두르고 마늘을 넣고 살짝 볶다가 양파와 페페론치노를 넣은 후 약간의 소금과 후추로 밑간하여 1분 정도 볶아주세요.",
          time: 60,
        },
        {
          content:
            "바지락과 화이트와인, 면 삶은 물을 넣어 조개 입이 벌어질 때까지 끓여주세요.",
          time: 300,
        },
        {
          content:
            "삶은 스파게티면과 방울토마토를 넣고 1~2분 정도 볶아주다가 약간의 소금과 후추로 간을 하고 이태리파슬리와 올리브오일을 뿌려주세요.",
          time: 120,
        },
        {
          content: "완성입니다!",
          time: 0,
        },
      ],
    },
    {
      id: "we-03",
      title: "크림 파스타",
      subtitle: "cream pasta",
      desc: "파스타는 밀가루와 물을 주재료로 하여 만든 반죽을 소금물에 넣고 삶아 만드는 이탈리아의 요리를 총칭하는 음식이다. 이미 기원전 1세기경부터 라자냐를 먹은 기록이 있으며 그 이전 시대의 자료에서 파스타와 관련한 그림이 발견되는 것으로 보아 이탈리아의 파스타는 매우 오래전부터 먹어온 것으로 추정된다.",
      coverImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDNfMjEx%2FMDAxNjQzODc3NTgzOTgw.Od7ox0RethvHUqYRoD-rti36OEjIJY0jGumq6wbGhqwg.zlkj7P3kIMfZuWpk6fm0pi8tUd1j63HF6fUHP6KuBrwg.PNG.compo_stela%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2022-02-03_%25BF%25C0%25C8%25C4_5.37.42.png&type=a340",
      ingredients: [
        "파스타면",
        "생크림",
        "베이컨",
        "마늘",
        "우유",
        "양파",
        "소금",
      ],
      totalTime: 10,
      steps: [
        {
          content: "양파 반개는 채썰고 베이컨 3장은 작게 잘라주세요",
          time: 120,
        },
        {
          content:
            "끓는물에 파스타면을 넣고 5분 끓여 준후 건져내어 불지않게 올리브유를 넣어 섞어 두세요",
          time: 300,
        },
        {
          content:
            "팬에 기름을 두르고 마늘 1스푼을 넣고 볶다가 마늘향이 올라오면 양파,베이컨을 넣어 익을때까지 볶습니다",
          time: 300,
        },
        {
          content:
            "우유150ml, 생크림150ml를 넣어 부르르 끓어오르면 체다치즈 1장을 추가해 녹을 때까지 저어줍니다",
          time: 420,
        },
        {
          content:
            "바지락과 화이트와인, 면 삶은 물을 넣어 조개 입이 벌어질 때까지 끓여주세요.",
          time: 300,
        },
        {
          content: "소금 간한후 면을 넣고 소스가 줄어 들때까지 졸여 줍니당",
          time: 300,
        },
      ],
    },
  ]);

  return (
    // 상태를 가지고 있는 객체
    <AppStateContext.Provider value={{ recipes }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
