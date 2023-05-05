

const SocialMediaIconsW = () => {

  const iconClassName = "hover:opacity-50 transition duration-500 xxs:w-[64px] xxs:h-[64px] w-[48px] h-[48px]"
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 items-center">
      <a
        className={iconClassName}
        href="https://github.com/jhssttj"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="githublink" src="../assets/icons/githubW.png"/>
      </a>
      <a
        className={iconClassName}
        href="https://www.linkedin.com/in/jhssttj/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedinlink" src="../assets/icons/linkedinW.png"/>
      </a>
      <a
        className={iconClassName}
        href="https://www.instagram.com/kevjhlee"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/icons/instagramW.png"/>
      </a>
    </div>
  )
}

export default SocialMediaIconsW;