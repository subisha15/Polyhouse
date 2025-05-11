import team1 from "../../assets/team.jpg";
import team2 from "../../assets/team.jpg";
import team3 from "../../assets/team.jpg";
import team4 from "../../assets/team.jpg";
import bg from "../../assets/whitebg.png";
function TeamCard() {
  const teamImages = [team1, team2, team3, team4];

  return (
    <div
      className="flex  flex-col 
    "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex  flex-col items-center justify-center m-6">
        <p className="text-4xl text-black mb-2 font-pacifico">Meet Our Team</p>
      </div>

      <div className="flex  justify-center p-2 gap-16 items-center m-10">
        {teamImages.map((image, index) => (
          <div
            key={index}
            className="relative w-52 h-64 rounded-lg overflow-hidden flex items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
          >
            {/* Red blurred background blob */}
            {/*<div className="absolute z-0 top-1/2 left-1/2 w-36 h-36 rounded-full bg-green-500 opacity-100 blur-[12px] animate-[blob-bounce_5s_infinite_ease] transform -translate-x-1/2 -translate-y-1/2"></div>*/}

            {/* White overlay with the image inside */}
            <div className="relative z-10 w-48 h-60 bg-white bg-opacity-95 backdrop-blur-[24px] rounded-lg overflow-hidden outline-2 outline-white">
              <img
                src={image}
                alt={`Team ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
