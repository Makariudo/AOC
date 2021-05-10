const fetch = async () => {
  let input ="";
  const data = await fetch('https://adventofcode.com/2020/day/2/input')
  console.log(data);
  fetch('https://adventofcode.com/2020/day/2/input').then(response => response.text()).then(text => input = text.trim()  )
  console.log(input)
}

