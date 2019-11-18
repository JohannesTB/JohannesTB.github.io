var afri2008:number = 1028;
var afri2009:number = 1041.9;
var afri2010:number = 1072.1;
var afri2011:number = 1073.7;
var afri2012:number = 1107.1;
var afri2013:number = 1134.4;
var afri2014:number = 1167.1;
var afri2015:number = 1174.5;
var afri2016:number = 1192.1;
var afri2017:number = 1207;
var afri2018:number = 1235.5;

var sa2008:number = 1132.6;
var sa2009:number = 1093.1;
var sa2010:number = 1164.2;
var sa2011:number = 1215.5;
var sa2012:number = 1262;
var sa2013:number = 1308.9;
var sa2014:number = 1331.3;
var sa2015:number = 1321.7;
var sa2016:number = 1294.7;
var sa2017:number = 1279.2;
var sa2018:number = 1261.5;

var euro2008:number = 4965.7;
var euro2009:number = 4616.4;
var euro2010:number = 4705.8;
var euro2011:number = 4615.2;
var euro2012:number = 4541.5;
var euro2013:number = 4436.9;
var euro2014:number = 4202;
var euro2015:number = 4191.6;
var euro2016:number = 4247.3;
var euro2017:number = 4278.7;
var euro2018:number = 4209.3;

var na2008:number = 6600.4;
var na2009:number = 6139.9;
var na2010:number = 6375.8;
var na2011:number = 6262.8;
var na2012:number = 5998.9;
var na2013:number = 6167;
var na2014:number = 6268.9;
var na2015:number = 6048.7;
var na2016:number = 5938.3;
var na2017:number = 5920.5;
var na2018:number = 6035.6;

var asia2008:number = 12954.7;
var asia2009:number = 13246.6;
var asia2010:number = 13986.8;
var asia2011:number = 14860.1;
var asia2012:number = 15308.8;
var asia2013:number = 15660.2;
var asia2014:number = 15787.7;
var asia2015:number = 15877;
var asia2016:number = 15984;
var asia2017:number = 16274.3;
var asia2018:number = 16274.1;

var aus2008:number = 1993;
var aus2009:number = 1875.7;
var aus2010:number = 1939.1;
var aus2011:number = 2035.2;
var aus2012:number = 2063.2;
var aus2013:number = 2014.7;
var aus2014:number = 2027.6;
var aus2015:number = 1986.8;
var aus2016:number = 1997.4;
var aus2017:number = 2001.3;
var aus2018:number = 2100.5;

var afriges:number = afri2008+afri2009+afri2010+afri2011+afri2012+afri2013+afri2014+afri2015+afri2016+afri2017+afri2018;
var sages:number = sa2008+sa2009+sa2010+sa2011+sa2012+sa2013+sa2014+sa2015+sa2016+sa2017+sa2018;
var euroges:number = euro2008+euro2009+euro2010+euro2011+euro2012+euro2013+euro2014+euro2015+euro2016+euro2017+euro2018;
var nages:number = na2008+na2009+na2010+na2011+na2012+na2013+na2014+na2015+na2016+na2017+na2018;
var asiages:number = asia2008+asia2009+asia2010+asia2011+asia2012+asia2013+asia2014+asia2015+asia2016+asia2017+asia2018;
var ausges:number = aus2008+aus2009+aus2010+aus2011+aus2012+aus2013+aus2014+aus2015+aus2016+aus2017+aus2018;


var ges:number = afriges+sages+euroges+nages+asiages+ausges;


var afrigesrel:number = (afriges/ges)*100;
var afriverabs:number = afri2018-afri2008;
var afriverrel:number = (afriverabs/afri2008)*100;

var sagesrel:number = (sages/ges)*100;
var saverabs:number = sa2018-sa2008;
var saverrel:number = (saverabs/sa2008)*100;

var eurogesrel:number = (euroges/ges)*100;
var euroverabs:number = euro2018-euro2008;
var euroverrel:number = (euroverabs/euro2008)*100;

var nagesrel:number = (nages/ges)*100;
var naverabs:number = na2018-na2008;
var naverrel:number = (naverabs/na2008)*100;

var asiagesrel:number = (asiages/ges)*100;
var asiaverabs:number = asia2018-asia2008;
var asiaverrel:number = (asiaverabs/asia2008)*100;

var ausgesrel:number = (ausges/ges)*100;
var ausverabs:number = aus2018-aus2008;
var ausverrel:number = (ausverabs/aus2008)*100;


console.log("Die Emission von Afrika ist " + afriges + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afrigesrel + " %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afriverrel + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + afriverabs + " kg CO2");

console.log("Die Emission von Süd Amerika ist " + sages + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit " + sagesrel + " %");
console.log("Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + saverrel + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + saverabs + " kg CO2");

console.log("Die Emission von Europa ist " + euroges + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + eurogesrel + " %");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + euroverrel + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + euroverabs + " kg CO2");

console.log("Die Emission von Nord Amerika ist " + nages + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit " + nagesrel + " %");
console.log("Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + naverrel + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + naverabs + " kg CO2");

console.log("Die Emission von Asien ist " + asiages + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asiagesrel + " %");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaverrel + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + asiaverabs + " kg CO2");

console.log("Die Emission von Australien ist " + ausges + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + ausgesrel + " %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ausverrel + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + ausverabs + " kg CO2");