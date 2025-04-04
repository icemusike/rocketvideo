import { motion } from 'framer-motion';
import {
  PencilSquareIcon,
  PhotoIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  MusicalNoteIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const features = [
  { title: 'AI Content Writer', Icon: PencilSquareIcon },
  { title: 'AI Image Generation', Icon: PhotoIcon },
  { title: 'AI Characters', Icon: UserGroupIcon },
  { title: 'AI Storyboard', Icon: ClipboardDocumentListIcon },
  { title: 'AI Voiceover', Icon: MicrophoneIcon },
  { title: 'AI Sound Selection', Icon: SpeakerWaveIcon },
  { title: 'AI Music Tracks', Icon: MusicalNoteIcon },
  { title: 'AI Video Generator', Icon: VideoCameraIcon },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="section-container">
        <h2 className="text-4xl font-black text-center mb-16 tracking-tighter">
          Pro-Level Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ title, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-xl p-6 hover:bg-[#222] transition-colors"
            >
              <Icon className="w-8 h-8 text-[#FF3366] mb-4" />
              <h3 className="text-xl font-bold">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
