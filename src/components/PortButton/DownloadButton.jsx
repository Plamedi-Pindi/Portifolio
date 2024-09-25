import Button from "./Button";

function DownloadButton({ handleSoundClick }) {
  return (
    <Button
      display={`hidden md:block`}
      width={`w-36`}
      background={`bg-black hover:bg-orange-300 hover:text-black duration-500 hover:font-bold hover:scale-95`}
      color={`text-white`}
      onclick={handleSoundClick}
      font={`text-sm`}
    >
      {" "}
      Download CV{" "}
    </Button>
  );
}

export default DownloadButton;
