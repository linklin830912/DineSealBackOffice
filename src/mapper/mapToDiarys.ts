import { Diary } from "@/model/Diary";

export function mapToDiarys(data: any) {    
    let diarys = [] as Diary[];
    data.diary.forEach((x: any) => {
        diarys.push({
            diaryId: x.diary_id,
            restaurantId: x.restaurant_id
       })
    });
    return diarys;
}