import LineGradient from '../componets/LineGradient';
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
    <section id="contact" className="py-48">
      {/* Headings */}
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, scale: 0.8},
            visible: {opacity: 1, scale: 1}
          }}
         >
          <div>
            <p className="font-playfair font-semibold text-4xl">"
              <span className='text-yellow'>Contact Me</span> To get Started
            </p>
            <div className="flex md:justify-end my-5">
            <LineGradient width="mx-auto w-2/4"/>
            </div>
          </div>
        </motion.div>

        {/*Form and Image  */}
        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div>
            
          </motion.div>

        </div>
    </section>
  )

}

export default Contact;
