import { MagicCard } from "../../ui/magic-card";



const BannerImage: React.FC = () => {
    return (
        <div className="md:w-[42%] w-full">
            <MagicCard>
                <img className="rounded-2xl p-3 mx-auto" src="./images/tamim.jpg" alt="my pic" />
            </MagicCard>
        </div>

    );
};

export default BannerImage;