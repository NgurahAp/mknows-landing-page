import Image from "next/image";

interface Card {
  icon: string;
  title: string;
  description: string;
}

interface CardGridProps {
  cards: Card[]; // cards adalah array dari Card
}

const CardGrid: React.FC<CardGridProps> = ({ cards,  }) => {
  return (
    <div className={`flex flex-wrap justify-center py-20 gap-12`}>
      {cards.map((card: Card, index: number) => (
        <div
          key={index}
          className="bg-white shadow-lg w-80 rounded-2xl p-6 text-center"
        >
          <div className="flex justify-center mb-6">
            <Image
              src={card.icon}
              alt={card.title}
              width={40}
              height={40}
              className="mx-auto"
            />
          </div>
          <h2 className="md:text-xl text-lg font-semibold text-[#648B04] text-left mb-2">
            {card.title}
          </h2>
          <p className="text-gray-600 md:text-xl text-lg text-left">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
