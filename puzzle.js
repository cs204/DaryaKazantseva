const {проверка_моделей,  Символ, Не, И, Или, Импликация, Эквивалентность} = require('./logic.js')

АРыцарь = new Символ("А - рыцарь.")
АЛжец = new Символ("А - лжец.")

БРыцарь = new Символ("Б - рыцарь.")
БЛжец = new Символ("Б - лжец.")

ВРыцарь = new Символ("В - рыцарь.")
ВЛжец = new Символ("В - лжец.")

// Задача 0
// А сказал: "Я и лжец и рыцарь."
знания0 = new И()
знания0.добавить(new Импликация(new Не(new И(АРыцарь, АЛжец)), АЛжец)) //если сказал неправду, то лжец
знания0.добавить(new Не(new И(АРыцарь, АЛжец))) // А не может быть и рыцарем и лжецом

// Задача 1
// А сказал: "Мы оба лжецы."
// Б ни чего не сказал.
знания1 = new И()
знания1.добавить(new Импликация(new Не(new И(АЛжец, БЛжец)), АЛжец))//если сказал неправду, то лжец
знания1.добавить(new Не(new И(АЛжец, БЛжец))) // не может быть одновременно два лжеца
знания1.добавить(new Импликация(new Не(new И(АЛжец, БЛжец)), БРыцарь))

// Задача 2
// А сказал: "Мы одинаковые."
// Б сказал: "Мы разного вида."
знания2 = new И()
знания2.добавить(new Импликация(new Не(new И(АРыцарь, БРыцарь)), АЛжец))//если сказал неправду, то лжец
знания2.добавить(new Не(new И(АРыцарь, БРыцарь)), АЛжец)
знания2.добавить(new Импликация(new Не(new И(АЛжец, БЛжец)), АЛжец))//если сказал неправду, то лжец
знания2.добавить(new Не(new И(АЛжец, БЛжец)), АЛжец)
знания2.добавить(new Импликация(new Не(new И(АЛжец, БРыцарь)), БРыцарь))
знания2.добавить(new Не(new И(АРыцарь, БЛжец)), АЛжец)

// Задача 3
// А сказал, но мы вы не услышали.
// Б сказал: "А сказал 'Я лжец'."
// Б сказал: "В - лжец."
// В сказал: "А - рыцарь."
знания3 = new И()
знания3.добавить(new Импликация(new Не(new И(АЛжец, ВЛжец)), БРыцарь))
знания3.добавить(new Не(new И(АЛжец, ВЛжец)), БРыцарь)
знания3.добавить(new Эквивалентность(new И(БРыцарь), АЛжец))
знания3.добавить(new Эквивалентность(new И(БРыцарь), ВЛжец))

символы = [АРыцарь, АЛжец, БРыцарь, БЛжец, ВРыцарь, ВЛжец]
задания = {
        "Задание 0": знания0,
        "Задание 1": знания1,
        "Задание 2": знания2,
        "Задание 3": знания3
    }

main()


function main()
{
	for(let задание in задания)
	{
		console.log(задание)
		if(задания[задание].операнды.length == 0)
		    console.log("    Пока не реализована.")
		else
		    for(let  символ of символы)
			if(проверка_моделей(задания[задание], символ))
			    console.log(`    ${символ.имя}`)
	}
}

