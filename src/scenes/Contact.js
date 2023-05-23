import {useForm} from 'react-hook-form';
import {motion} from 'framer-motion';

const Contact = () => {

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return(
    <section id="contact" className="flex justify-center items-center min-h-screen">
      {/*Content Section */}
      <motion.div
          className="md:min-w-[1000px] md:w-[50%]
          shadow-xl flex flex-col bg-white md:m-24"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
        {/* Title Section */}
        <div className="flex flex-col justify-start items-center bg-grey2 text-center h-auto">
            <p className="text-4xl font-semibold p-2 md:m-2 md:mt-8 mt-16">
              Contact
            </p>
            <div className="border-b-4 border-blue w-[150px]"></div>
            <p className="text-gray-500 p-2 m-2">
            Currently, I am seeking any web/software developing job opportunities as I look to integrate into the tech industry. 
            Please feel free to reach out to me for any potential openings or if you are interested in talking about coding and projects in general. 
            I would love to learn from other passionate developers!
            </p>
        </div>
        {/* Contact Section */}
        <div className="m-4 justify-center">
          {/* Form Section */}
          <form
            className="w-1/2 p-2 bg-gray-200 rounded-lg shadow-xl"
            target="_blank"
            onSubmit={onSubmit}
            action = {`https://formsubmit.co/470b7198e34f535e1ee66acd2f28e9f2`}
            method="POST"            
            >
            <input
              className="w-full placeholder-opaque-black p-2 shadow-xl rounded-lg my-2"
              type="text"
              placeholder="Name"
              {...register("name",{
                required: true,
                maxLength: 100
              })}/>
            {errors.name && (
              <p className="font-semibold text-red mt-1">
                {errors.name.type === 'required' && 'Cannot submit blank name.'}
                {errors.name.type === 'maxLength' && 'Max Length of 100 exceeded.'}
              </p>
            )}

            <input
              className="w-full placeholder-opaque-black p-2 shadow-xl rounded-lg my-2"
              type="text"
              placeholder="Email"
              {...register("email",{
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}/>
            {errors.email && (
              <p className="font-semibold text-red mt-1">
                {errors.email.type === 'required' && 'Cannot submit blank email.'}
                {errors.email.type === 'pattern' && 'Improper email format.'}
              </p>
            )}
            
            <textarea
              className="w-full placeholder-opaque-black p-2 shadow-xl rounded-lg my-2"
              type="text"
              placeholder="Message"
              rows="4"
              cols="50"
              {...register("message",{
                required: true,
                maxLength:2000
              })}/>
            {errors.message && (
              <p className="font-semibold text-red mt-1">
                {errors.message.type === 'required' && 'Cannot submit blank message.'}
                {errors.message.type === 'maxLength' && 'Max Length of 2000 exceeded.'}
              </p>
            )}

            <button
              type="submit"
              className="bg-blue text-white rounded-lg p-2 hover:bg-blueH shadow-2xl mt-2"
            >
              SEND
            </button>
          </form>
          {/* Pic Section */}
          <div className="w-1/2 h-1/2">
            <img className="w-full h-full p-2 " src='../assets/contact-image-md.png' alt='contactPage'/>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact;