import { TalkBubbleContainer, GradientWrapper } from "@/shared";
import { Comic1, Comic2Left, Comic2Right, Comic3 } from "@/shared/assets";

export default function ComicContainer() {
    return (
        <div className="flex flex-col gap-20 w-full h-full">
            <div className="relative">
                <GradientWrapper>
                    <Comic1 className="w-full h-full" />
                </GradientWrapper>
                <div className="absolute -bottom-[10%] left-6 max-w-[50%] max-h-[50%]">
                    <TalkBubbleContainer>
                        <p className="text-md">
                            이제 본격적으로 <br />
                            OO님의 사주팔자를 <br />
                            분석해볼 차례네요.
                        </p>
                    </TalkBubbleContainer>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <Comic2Left />
                <Comic2Right />
            </div>
            <div className="relative">
                <GradientWrapper>
                    <Comic3 className="w-full h-full" />
                </GradientWrapper>
                <div className="absolute -top-[30%] left-6 max-w-[50%] max-h-[50%]">
                    <TalkBubbleContainer direction="bottom">
                        <p className="text-md">
                            이제 본격적으로 <br />
                            OO님의 사주팔자를 <br />
                            분석해볼 차례네요.
                        </p>
                    </TalkBubbleContainer>
                </div>
            </div>
        </div>
    );
}
