import { CardBg, SajuTable, TextBox } from "@/shared/ui";

export default function SajuContainer() {
    return (
        <div className="relative flex flex-col gap-10 w-full h-full bg-bg-primary pt-10 px-5 pb-8.5 border-2 border-border-primary ">
            <CardBg />
            <div className="flex flex-col gap-3 text-text-primary text-center">
                <div className="text-base">김로켓님의 사주</div>
                <div className="text-2xl font-bold">1980년 8월 27일 08:10</div>
            </div>
            <SajuTable row={3} col={4}>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
                <TextBox subscript="사" superscript="陰火">
                    巳
                </TextBox>
            </SajuTable>
        </div>
    );
}
