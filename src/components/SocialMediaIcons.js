

const SocialMediaIcons = () => {

  const iconClassName = "hover:opacity-50 transition duration-500 w-[48px] h-[48px]"
  return (
    <div className="flex justify-center md:justify-start gap-7">
      <a
        className={iconClassName}
        href="https://github.com/jhssttj"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="githublink" src="../assets/icons/github.png"/>
      </a>
      <a
        className={iconClassName}
        href="https://www.linkedin.com/in/jhssttj/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedinlink" src="../assets/icons/linkedin.png"/>
      </a>
      <a
        className={iconClassName}
        href="https://www.instagram.com/kevjhlee"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/icons/instagram.png"/>
      </a>
    </div>
  )
}

export default SocialMediaIcons;