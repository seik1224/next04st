"use server";
import dbConnect from "@/libs/mongoose";
import { PostModel } from "@/models/post";
import { revalidatePath } from "next/cache";

export const insertSampleData = async (category: string) => {
  await dbConnect();

  const samplePosts = [
    {
      category: category,
      title: "공지사항 1",
      content: "공지사항 내용입니다.",
      hit: 0,
      noticeStatus: true,
      createdAt: new Date(),
    },
    {
      category: category,
      title: "일반 게시물 1",
      content: "일반 게시물 내용입니다.",
      hit: 0,
      noticeStatus: false,
      createdAt: new Date(),
    },
  ];

  /*
    [ Mongoose 조회 (Read) 메서드 ] 

    // 단일 문서 찾기
    Model.findById(id)
    Model.findOne({ 조건 })

    // 여러 문서 찾기
    Model.find({ 조건 })

    // 정렬, 제한, 건너뛰기
    Model.find()
    .sort({ field: 'asc' or 'desc' })
    .limit(10)
    .skip(20)

    .sort({ createdAt: -1 }) 내림차순
    .sort({ createdAt: 1 }) 오름차순

    // 특정 필드만 선택
    Model.find().select('title content -_id')  // -는 제외

    // 이 조건에 맞는 모든 문서의 수를 계산
    const total = await PostModel.countDocuments({
        category: "notice",
        deletedAt: { $exists: false }
    });
  */
  /*
    [ Mongoose 생성 (Create) 메서드 ] 

    // 단일 문서 생성
    Model.create(데이터)
    new Model(데이터).save()

    // 다중 문서 생성
    Model.insertMany([데이터1, 데이터2])
  */
  /*
    [ Mongoose 수정 (Update) 메서드 ] 

    // 단일 문서 수정
    Model.findByIdAndUpdate(id, { $set: { 수정할_데이터 } })
    Model.updateOne({ 조건 }, { $set: { 수정할_데이터 } })

    // 여러 문서 수정
    Model.updateMany({ 조건 }, { $set: { 수정할_데이터 } })
  */
  /*
    [ Mongoose 삭제 (Delete) 메서드 ] 

    // 단일 문서 삭제
    Model.findByIdAndDelete(id)
    Model.deleteOne({ 조건 })

    // 여러 문서 삭제
    Model.deleteMany({ 조건 })
  */
  /*
    [ 조건 ]

    // 정확한 값 매칭
    Model.find({ age: 25 })

    // 비교 연산자 사용
    Model.find({
        age: { $gt: 25 },    // 25보다 큰
        age: { $gte: 25 },   // 25보다 크거나 같은
        age: { $lt: 25 },    // 25보다 작은
        age: { $lte: 25 },   // 25보다 작거나 같은
        age: { $ne: 25 },    // 25가 아닌
    })


    // 배열에 포함된 값 찾기
    Model.find({ tags: { $in: ['javascript', 'typescript'] } })  // 하나라도 포함
    Model.find({ tags: { $nin: ['java', 'python'] } })          // 포함하지 않는
    Model.find({ tags: { $all: ['javascript', 'react'] } })     // 모두 포함

    // 배열의 크기로 찾기
    Model.find({ tags: { $size: 3 } })  // 배열 길이가 3인 문서

    // AND 조건
    Model.find({
        $and: [
            { age: { $gte: 20 } },
            { age: { $lte: 30 } }
        ]
    })

    // OR 조건
    Model.find({
        $or: [
            { category: '공지사항' },
            { isImportant: true }
        ]
    })

    // NOT 조건
    Model.find({
        category: { $not: /공지사항/ }
    })

    // 필드 존재 여부 확인
    Model.find({ email: { $exists: true } })    // email 필드가 있는 문서
    Model.find({ phone: { $exists: false } })   // phone 필드가 없는 문서

    // null 체크 확인
    Model.find({ deletedAt: null })  


    // 특정 날짜 범위 검색
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2024-12-31');

    Model.find({
        createdAt: {
            $gte: startDate,
            $lte: endDate
        }
    })
 
  */
  const result = await PostModel.insertMany(samplePosts);
  /*
    [ revalidatePath ]
    데이터가 변경되었을 때 해당 경로가 자동으로 새로고침되어 새로운 데이터가 표시하는 Next.js 13 이상에서 제공하는 서버 액션(Server Action) 기능
  */
  revalidatePath(`/board/${category}`);
  //   return result;
};
