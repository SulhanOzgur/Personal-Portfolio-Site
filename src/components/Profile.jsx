import { useSelector } from 'react-redux';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const { isDarkMode } = useTheme();
  const { lang } = useLanguage();

  const labels = {
    en: {
      sectionTitle: 'Profile',
      fullName: 'Full Name',
      birthday: 'Birthday',
      location: 'Location',
      education: 'Education',
      role: 'Role',
      aboutMe: 'About Me',
    },
    tr: {
      sectionTitle: 'Profil',
      fullName: 'Ad Soyad',
      birthday: 'Doğum Tarihi',
      location: 'İkamet Şehri',
      education: 'Eğitim',
      role: 'Meslek',
      aboutMe: 'Hakkımda',
    },
  };

  return (
    <section
      className={`${
        isDarkMode ? 'bg-[#0B0C42] text-white' : 'bg-[#3B2A9F] text-lime-200'
      } py-20 px-6`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Ana başlık */}
        <h2 className="text-4xl font-bold mb-12 dark:text-lime-200">
          {labels[lang].sectionTitle}
        </h2>

        {/* Grid alanı */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Sol Kısım */}
          <div className="space-y-2">
            <h3 className="text-3xl text-white font-semibold mb-4">
              {profile.title}
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <strong className="text-lime-200">
                  {labels[lang].fullName}:
                </strong>{' '}
                <span className="text-white">{profile.basicInfo.fullName}</span>
              </li>
              <li>
                <strong className="text-lime-200">
                  {labels[lang].birthday}:
                </strong>{' '}
                <span className="text-white">{profile.basicInfo.birthday}</span>
              </li>
              <li>
                <strong className="text-lime-200">
                  {labels[lang].location}:
                </strong>{' '}
                <span className="text-white">{profile.basicInfo.location}</span>
              </li>
              <li>
                <strong className="text-lime-200">
                  {labels[lang].education}:
                </strong>{' '}
                <span className="text-white">
                  {profile.basicInfo.education}
                </span>
              </li>
              <li>
                <strong className="text-lime-200">{labels[lang].role}:</strong>{' '}
                <span className="text-white">{profile.basicInfo.role}</span>
              </li>
            </ul>
          </div>

          {/* Orta Görsel */}
          <div className="mx-auto">
            <img
              src={`/icons/${profile.aboutImage}`}
              alt="Profile"
              className="rounded-2xl w-64 h-auto object-cover shadow-lg"
            />
          </div>

          {/* Sağ Kısım */}
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              {labels[lang].aboutMe}
            </h3>
            <p className="text-base text-white">{profile.aboutMe}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
