import { prop, modelOptions } from "@typegoose/typegoose";
import { getModelForClass } from "@/utils/getModelForClass";

@modelOptions({
  schemaOptions: { collection: "post" }, // 이 데이터들이 들어갈 Collection(문서) 이름
})
export class PostClass {
  /*
    @prop()
    아무 옵션 없이 사용해도 대부분 문제 없음
    기본적인 스키마 설정 대부분의 간단한 경우에는 이것으로 충분
    
    required: 필드가 필수인지 여부 @prop({ required: true })
    default: 기본값 설정 @prop({ default: false })

    @prop({ required: true, default: 0 })
    hit!: number;
  */
  @prop()
  category!: string;

  @prop()
  title!: string;

  @prop()
  content!: string;

  @prop()
  hit!: number;

  @prop()
  thumb?: string;

  @prop()
  password?: string;

  @prop({ default: false })
  noticeStatus!: boolean;

  @prop({ default: () => new Date() })
  createdAt!: Date;

  @prop()
  deletedAt?: Date;
}

export const PostModel = getModelForClass(PostClass);
