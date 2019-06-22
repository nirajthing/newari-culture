import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Learnmore extends React.Component {
    handleClick = () => {
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="learnmore">
                <button type="button" id="btn2" onClick={this.handleClick} >Back to Home</button>

                <h1 id="secondpageh1" class="animated fadeInDown">Newar caste system</h1>
                <p class="animated fadeInUp">Newar caste system is the system by which Newārs, the historical inhabitants of Kathmandu Valley, are divided into groups on the basis of Vedic varna model and divided according to their hereditary occupations. First introduced in the time of the Licchavis (A.D.300 - ca. 879), the Newar caste system assumed its present shape during the medieval Malla period (A.D. 1201 - 1769).[1] The Newar caste structure resembles more closely that of North India and Madheshis than that of Khas 'Parbatiya' in that all four varna (Brahmin, Kshatriya, Vaishya and Shudra) and untouchables are represented.</p>
                <p id="middlePar" class="animated bounce delay-2s">Inside the Castes</p>
                <p id="p1" class="animated slideInUp">(1) Rājopādhyāya Brahmins are on top of the Hindu Newar social hierarchy. Referred to as ‘Dhyo Brahman'(God Brahmin) or colloquially as ‘Dhyo Baje'(God Grandfather), these Brahmins with surnames Rajopadhyaya, Sharma, Acharya, Subedi, among others, serve as family priest (purohit) primarily to the Hindu Srēṣṭha clans. </p>
                <p id="p2" class="animated slideInUp">(2) Maithil Brahmins or colloquially Tirhute Brahmin with surnames Jhā and Miśra serve as temple priests and are later additions to the Newar nation. Most Newars, as well as they themselves, consider them as being only partial Newars. The Tirhute Brahmins came to the Valley in the late Malla period and also during the early Shah period.</p>
                <p id="p3" class="animated slideInUp">(3) Srēṣṭha or colloquially Seshyah is the immediate second-ranking group among Shivamargi (Hindu) Newars. They are the most dominant Newar caste that includes the old Newari aristocracy as well as the traditional land-owning and mercantile families. Within the Sresthas there are three hierarchically ranked, traditionally endogamous groups which describe themselves as i. Kshatriya or colloquially Chatharīya, ii. Pañchthariya or simply Shrestha, and iii.</p>
                <p id="p4" class="animated slideInUp">(1) Gubhāju-Bare, consists of two sub-groups, viz. the Gubhajus or Vajrachāryas, and Bares or Shākyas. The Gubhaju (Vajracharya) and the Bare (Shakya) form the priestly functionaries. The Bajracharyas, who belong to the first group, are placed at the top of the hierarchy among the Buddhamargi Newars. They are the purohits or family priests. </p>
                <p id="p5" class="animated slideInUp">(2) Urāy or Udās, consists of nine main subgroups, viz Tuladhar, Bania, Kansakar, Tamrakar, Sthapit, Shikhrakar, Selalik, Sindurākār etc. The Urāy/Udas group is composed of the castes of hereditary merchants and artisans.[18] The name ‘Uray’ is said to have been derived from the Sanskrit term “upāsaka” meaning “devout layman”.</p>


            </div>
        )
    }
}

export default Learnmore;