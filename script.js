const student = "Дедов Даниил Романович";
document.getElementById("student").innerHTML = student;

let guys = [
  { name: 'Пономарев Андрей Алексеевич', gender: 'man', birth: '11.12.1980' },
  { name: 'Рыбакова Алина Семёновна', gender: 'woman', birth: '16.04.1974' },
  { name: 'Молчанов Даниил Ильич', gender: 'man', birth: '21.03.1984' },
  { name: 'Смирнова София Львовна', gender: 'woman', birth: '02.01.1987' },
  { name: 'Владимиров Артём Григорьевич', gender: 'man', birth: '07.12.1990' },
  { name: 'Маслова Елизавета Егоровна', gender: 'woman', birth: '10.10.1997' },
  { name: 'Назарова Вера Романовна', gender: 'woman', birth: '01.05.1983' },
  { name: 'Иванов Иван Фёдорович', gender: 'man', birth: '05.05.1999' },
  { name: 'Дмитриев Алексей Григорьевич', gender: 'man', birth: '12.11.1998' },
  { name: 'Овчинников Платон Александрович', gender: 'man', birth: '26.05.1999' },
  { name: 'Мартынова Софья Тимуровна', gender: 'woman', birth: '07.06.1995' },
  { name: 'Соколов Михаил Адамович', gender: 'man', birth: '11.03.1979' }
]
function godiki(birth) {
  birth = user.birth.split('.')
  birthDate = new Date(birth[2],birth[1],birth[0])
  const age_diff = Date.now() - birthDate.getTime();
  const ageDate = new Date(age_diff);
  age = Math.abs(ageDate.getFullYear() - 1970);
  
  return age
}
const totalPeoples = guys.length;
console.log(`Всего гостей : ${totalPeoples}`);

const man = guys.filter(guys => guys.gender == 'man').length;
console.log(`Людей : ${man}`);

const woman = (totalPeoples - man);
console.log(`Женщин : ${woman}`);
for (let user_index in guys) {
  user = guys[user_index]
  name_short = user.name.split(' ')
  name_short = `${name_short[0]} ${name_short[1][0]}. ${name_short[2][0]}.`
  gender = (user.gender == 'man' && 'Муж.') || 'Жен.'
  age = godiki(user.birth);
  let final = (`${name_short}, ${gender}, Возраст: ${age}`);
  console.log(final);
}