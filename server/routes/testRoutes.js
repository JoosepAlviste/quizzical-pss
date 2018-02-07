var express = require("express");
var router = express.Router();

router.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
        < html >
        <head>
            <meta charset="utf-8" />
            <title> Χρήση του tag article </title>
        </head>

        <body>
            <article>
                <h1>Πανεπιστήμιο Μακεδονίας</h1>
                <h2>Μεταπτυχιακό Εφαρμοσμένης Πληροφορικής</h2>
                <details> <summary>
                    Καλημέρα
			</summary>
                    <p> Και τώρα
			</p>
                    <p> Και ύστερα
			</p>
                </details>
                <p>Το Πρόγραμμα Μεταπτυχιακών Σπουδών Ειδίκευσης του Τμήματος Εφαρμοσμένης Πληροφορικής έχει ως αντικείμενο την παροχή εκπαίδευσης μεταπτυχιακού επιπέδου στην Πληροφορική έτσι ώστε οι πτυχιούχοι του ΠΜΣΕ να αποκτήσουν ισχυρό επιστημονικό υπόβαθρο, εμπειρία και τεχνογνωσία για την υιοθέτηση βέλτιστων λύσεων και εφαρμογών σε οικονομικά, διοικητικά και εκπαιδευτικά θέματα.</p>
                <a href="http://mai.uom.gr/frontend/index.php">Δείτε περισσότερα</a>

                <p>Ανοίγουμε στις <time>10:00</time> κάθε πρωϊ.</p>

                <p>Ραντεβού την <time datetime="2015-04-12 20:00">Κυριακή του Πάσχα</time>.</p>

            </article>

        </body>
	
</html >`)
}
)

module.exports = router;