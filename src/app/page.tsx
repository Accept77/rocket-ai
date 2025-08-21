import { ComicContainer, SajuCard } from "@/features";

export default function Home() {
    return (
        <div className="max-w-md ">
            <ComicContainer />
            <div className="px-3">
                <SajuCard />
            </div>
        </div>
    );
}
