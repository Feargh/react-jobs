const Card = ({ children, bg = "bg-gray-100" }) => {
	return <div className={`${bg} rounded-lg shadow-md`}>{children}</div>;
};

export default Card;