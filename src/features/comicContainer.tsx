import Image from "next/image";
import { TalkBubbleContainer, GradientWrapper } from "@/shared";
import { Comic2Left } from "@/shared/assets";

export default function ComicContainer() {
    return (
        <div className="flex flex-col gap-20 w-full h-full">
            <div className="relative">
                <GradientWrapper>
                    <Image
                        src={"/images/comic1.png"}
                        alt="Comic 1"
                        width={400}
                        height={300}
                        className="w-full h-full object-contain"
                        priority
                    />
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
                <Image
                    src={"/images/comic2.png"}
                    alt="Comic 2"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>
            <div className="relative">
                <GradientWrapper>
                    <Image
                        src={"/images/comic3.png"}
                        alt="Comic 3"
                        width={400}
                        height={300}
                        className="w-full h-full object-contain"
                    />
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
