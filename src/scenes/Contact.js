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

  return (
    <section id="contact" className="pt-24 pb-24">
        {/*Form and Image  */}
        <div className="flex flex-col content-center md:flex-row md:justify-between gap-16 mt-8">
          <motion.div
          className="basis-1/2 flex justify-center"
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{duration:0.5}}
             variants={{
               hidden: {opacity: 0, x:0},
               visible: {opacity: 1, y:0}
             }}>
            <img src="../assets/contact-image.jpeg" alt="contact"/>
          </motion.div>
          <motion.div
           className="basis-1/2 mt-10 md:mt-0 flex flex-col content-center"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{delay: 0.2, duration:0.5}}
           variants={{
             hidden: {opacity: 0, x:0},
             visible: {opacity: 1, y:0}
           }}>
              <p className="font-poppins font-semibold text-4xl md:justify-start justify-center flex mb-8">
                <span className="relative z-20 before:content-brush5 before:absolute before:-top-[160px] before:z-[-1] 
                  before:-left-[50px]">
                    CONTACT ME
                </span>
              </p>
            <form
              className=""
              target="_blank"
              onSubmit={onSubmit}
              action = {`https://formsubmit.co/470b7198e34f535e1ee66acd2f28e9f2`}
              method="POST"            
              >
              <input
                className="font-poppins w-full bg-blue font-semibold placeholder-opaque-black p-3 shadow-sd rounded-lg border-2 border-black "
                type="text"
                placeholder="NAME"
                {...register("name",{
                  required: true,
                  maxLength: 100
                })}/>
              {errors.name && (
                <p className="font-poppins text-red mt-2">
                  {errors.name.type === 'required' && 'Cannot submit blank name.'}
                  {errors.name.type === 'maxLength' && 'Max Length of 100 exceeded.'}
                </p>
              )}

              <input
                className="font-poppins w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-6 shadow-sd rounded-lg border-2 border-black"
                type="text"
                placeholder="EMAIL"
                {...register("email",{
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}/>
              {errors.email && (
                <p className="font-poppins text-red mt-2">
                  {errors.email.type === 'required' && 'Cannot submit blank email.'}
                  {errors.email.type === 'pattern' && 'Improper email format.'}
                </p>
              )}
              
              <textarea
                className="font-poppins w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-6 shadow-sd rounded-lg border-2 border-black"
                type="text"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message",{
                  required: true,
                  maxLength:2000
                })}/>
              {errors.message && (
                <p className="font-poppins text-red mt-2">
                  {errors.message.type === 'required' && 'Cannot submit blank message.'}
                  {errors.message.type === 'maxLength' && 'Max Length of 2000 exceeded.'}
                </p>
              )}

              <button
                type="submit"
                className="font-poppins p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-blue hover:text-black
                 active:text-white transition duration 500 shadow-sd rounded-lg border-2 border-black"
              >
                SEND
              </button>
            </form>
          </motion.div>
        </div>
    </section>
  )

}

export default Contact;
