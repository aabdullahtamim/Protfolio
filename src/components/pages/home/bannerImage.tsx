import { MagicCard } from "../../ui/magic-card";



const BannerImage: React.FC = () => {
    return (
        <MagicCard>

            <div className="p-2 flex justify-center items-center ">
                <img className="rounded-2xl" src="./images/tamim.jpg" alt="my pic" />

            </div>
        </MagicCard>
    );
};

export default BannerImage;