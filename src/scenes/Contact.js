import LineGradient from '../components/LineGradient';
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
    <section id="contact" className="pt-24 pb-32">
        {/*Form and Image  */}
        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
          className="basis-1/2 flex justify-center"
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{duration:0.5}}
             variants={{
               hidden: {opacity: 0, x:50},
               visible: {opacity: 1, y:0}
             }}>
            <img src="../assets/contact-image.jpeg" alt="contact"/>
          </motion.div>
          <motion.div
           className="basis-1/2 mt-10 md:mt-0"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{delay: 0.2, duration:0.5}}
           variants={{
             hidden: {opacity: 0, x:50},
             visible: {opacity: 1, y:0}
           }}>
            <p className="font-poppins font-semibold text-4xl md:justify-start mb-8">
              <span className="relative z-20 before:content-brush5 before:absolute before:-top-[160px] before:z-[-1] 
                before:-right-[60px]">
                  CONTACT ME
              </span>
            </p>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action = {`https://formsubmit.co/470b7198e34f535e1ee66acd2f28e9f2`}
              method="POST"            
              >
              <input
                className="font-poppins w-full bg-blue font-semibold placeholder-opaque-black p-3 shadow-sd rounded-lg border-2 border-black"
                type="text"
                placeholder="NAME"
                {...register("name",{
                  required: true,
                  maxLength: 100
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === 'required' && 'This field is required.'}
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
                <p className="text-red mt-1">
                  {errors.email.type === 'required' && 'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid email format.'}
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
                <p className="text-red mt-1">
                  {errors.message.type === 'required' && 'This field is required.'}
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
