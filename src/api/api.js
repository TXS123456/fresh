import http from "@/utils/http.js";

//Home页面的轮播图
export const getHomebanner =()=>http("get","api/product/banner/queryBannerList?pageNum=1&showNum=10")

//Home公告的轮播
export const getHomenotice =()=>http("get","api/product/news/getHomeNews")

//Home的列表
export const getHomeitem=()=>http("get","api/product/categoryNavigation/getMobileFrontList?envi=1")

//Home的优选产品
export const getHomeproduct=()=>http("get","api/product/product/queryHomeActivityProduct?cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0&pageSize=5")

//Home的猜你喜欢
export const getHomewell=()=>http("get","api/product/product/queryGuessYouLikeProduct?pageNumber=1&cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0&pageSize=5")

//Home的龙虾、蟹类、壳类、鱼类、肉类、其他类
export const getHomepulp =()=>http("get","api/product/homeArea/getHomeAreas")

//Home的龙虾
export const getHomelobsert=()=>http("get","api/product/product/queryProductByCateIdShowNum?cateId=b4813f55-fe95-4e4f-af67-8811572eec80,0a21f7fd-e35e-440f-a67f-91cf69aa6074,9299be89-a64e-4b81-bbb5-d094212a2bfb,77720f81-5ba3-449e-8652-d96fc6165bf0,e2a89ace-e9d1-4b42-b80c-a0461dd3b8c6,59e0fa7e-28e9-4876-9a8c-07d6bc733570,2fc442ed-9e5d-4bb9-bff9-804bb933f9b3&showNum=5&showNoQuote=1&cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0")

//Home的螃蟹
export const getHomecrab=()=>http("get","api/product/product/queryProductByCateIdShowNum?cateId=b82a5356-b87d-4475-afb3-1489e3fce1c5,a4970c2f-ad88-4339-be52-9a3cfb293f53,429432ad-35c6-45ff-8802-a601f85e7d5b,0bffd3d7-5fde-4a79-8787-4f9ed2cd3ee2,21cade59-6bc7-4c09-bb59-af5fe8a3714e,51a4f6b9-f800-473c-b829-a8ce6a33ee0b,b1e59ef9-c7c9-48b5-aab3-8d7c7cb3de3d,9b939796-8bfa-4e27-bd5a-7a9d567d4c59&showNum=5&showNoQuote=1&cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0")

//Home的壳
export const getHomefish=()=>http("get","api/product/product/queryProductByCateIdShowNum?cateId=9982ad7a-2305-4f92-ba58-3b1bd835800e,9ba1e7df-5d82-476f-8779-31307a22af8c,c58b758e-fe70-47de-8fbe-22599e9cbc8d,8b0f95b5-9fdd-4a66-abfe-8fef787121ed,821d8a8a-fca3-475a-858c-0c27a98bef7a,09f39a8b-b9b2-48aa-aed0-563a4682ba62,c538c501-1da1-43cd-8144-b79e07621507,b5ab57a8-aea0-46c7-a5c2-07445f5a6565&showNum=5&showNoQuote=1&cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0")

//Home的鱼类
export const getHomeshell=()=>http("get","api/product/product/queryProductByCateIdShowNum?cateId=50a32a8a-0ceb-4533-b71e-1e63d3159810,89f8a3a5-62d0-417f-9ff2-4b4174c642ae,d4babf44-98cc-4fc6-9b5a-53a994144816,3edf43ce-f6bf-4187-96b8-5ce060d683af,a477d907-20d6-428b-9dd4-b6c21b1b6c0c,71f51c32-350e-42c8-89ab-a2369ec72771,f463b71d-cb23-44db-b22b-da861b8be2b0&showNum=5&showNoQuote=1&cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0")

//Home的肉类
export const getHomemeat=()=>http("get","api/product/product/queryProductByCateIdShowNum?cateId=88bc5061-3287-42a1-b2bd-455b63661faf,2a28f45f-0240-4557-88f0-3fc0cb1c2208,bd075922-50d7-4c15-83e5-450b0a174653,5edb417b-5c4b-4aa0-b9a1-6a360c54d8d4,89d939da-69b7-48a3-aa2b-1a73683bbc17,31a2140b-665c-46af-966f-2bcbd41c674e,3adb469f-37b4-4e49-8085-572d0c5977ac,1c327461-1f6a-415c-b3c7-0541c9e38a18&showNum=5&showNoQuote=1&cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0")

//Home的其他
export const getHomeelse=()=>http("get","api/product/product/queryProductByCateIdShowNum?cateId=ac0b0123-a6e7-49bc-9120-7fd5a93cdf99,4b6fe667-95bc-47e6-a661-7f4d4f93ab22,864d1219-afa7-423e-80a2-4b0c3eb53a54,63f4f12d-dc7a-4ebe-b9a1-ebc42448cb68,9f6ad6bd-0d15-482e-bcfa-eb6567a06bb4,97e24ab9-f633-425b-94eb-a88e6e625258,c1b6c394-400c-4fc1-aa1d-b46e73d73334,2cc7478a-caec-40aa-b11a-3e6c79ec417b&showNum=5&showNoQuote=1&cityId=2bf8c60c-789d-433a-91ae-8e4ae3e587a4&abroad=0")