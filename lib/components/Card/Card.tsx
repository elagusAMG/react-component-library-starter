type CardProps = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="ui">
      <div className="ui-bg-white ui-rounded-lg ui-shadow-lg ui-overflow-hidden sm:max-w-xs lg:max-w-sm xl:max-w-md">
        <div className="ui-px-6 ui-py-4">
          <h2 className="ui-font-sans ui-font-bold ui-text-xl ui-mb-2 ui-text-pink">{title}</h2>
          <p className="ui-bg-white ui-border-none ui-rounded-none ui-font-sans ui-text-gray-dark ui-text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
