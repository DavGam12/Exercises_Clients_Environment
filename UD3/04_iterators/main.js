'use strict'


var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple()
{
  console.log('Normal For');
  for (let index = 0; index < pilots.length; index++)
  {
    console.log(pilots[index]);
  }
}
function iterateForEach()
{
  console.log('For Each');
  pilots.forEach(el =>
  {
    console.log(el);
  })
}
function mapIds()
{
  console.log('Ids');
  return pilots.map(el => el.id);
}
function rebels()
{
  console.log('Rebels');
  return pilots.filter(el => el.faction.includes('Rebels'))
}
function totalFaction(faction)
{
  console.log('Specific Faction');
  return pilots.filter(el => el.faction.includes(faction)).length;
}
function avgYears(faction)
{
  console.log('Specific Faction Avg Age');
  let currentYears = 0;
  pilots.filter(el => el.faction.includes(faction)).map(el => el.years).forEach(el => currentYears += el)
  return currentYears / pilots.filter(el => el.faction.includes(faction)).length;
}

iterateSimple()
iterateForEach()
console.log(mapIds());
console.log(rebels());
console.log(totalFaction('Empire'));
console.log(avgYears('Empire'));
