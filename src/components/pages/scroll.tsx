import { Marquee } from "../ui/marquee"


const reviews = [
    {
        name: "Jack Smith",
        username: "@jacksmith",
        body: "Absolutely blown away! The design and functionality are top-notch. Highly recommended.",
        img: "https://i.pravatar.cc/150?img=32",
    },
    {
        name: "Jill Taylor",
        username: "@jillt",
        body: "I’ve never experienced something this smooth before. The attention to detail is amazing!",
        img: "https://i.pravatar.cc/150?img=12",
    },
    {
        name: "John Doe",
        username: "@johndoe",
        body: "The interface is clean and intuitive. Everything works perfectly. I’m genuinely impressed.",
        img: "https://i.pravatar.cc/150?img=45",
    },
    {
        name: "Jane Wilson",
        username: "@janew",
        body: "This is hands-down one of the best experiences I’ve had with any web application. Love it!",
        img: "https://i.pravatar.cc/150?img=68",
    },
    {
        name: "Jenny Lee",
        username: "@jennyl",
        body: "Incredible work! Everything feels smooth and polished. Very happy with the result.",
        img: "https://i.pravatar.cc/150?img=52",
    },
    {
        name: "James Brown",
        username: "@jamesb",
        body: "I’m amazed at how well everything flows together. Truly a fantastic experience.",
        img: "https://i.pravatar.cc/150?img=7",
    },
];

// simple className utility used in this file
const cn = (...inputs: Array<string | false | null | undefined>) =>
    inputs.filter(Boolean).join(" ")

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    )
}

export function Scroll() {
    return (
        <div className="relative mt-4 flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-[#A2F4FD]/10 to-background">
            <Marquee pauseOnHover className="[--duration:20s] ">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}
