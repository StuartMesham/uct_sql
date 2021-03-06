const levels = [{'name': 'SELECT *',
    'short_name': 'select',
    'database_type': 'family',
    'answer': {'columns': ['id', 'name', 'gender', 'species', 'num_books_read'],
        'values': [[1, 'Dave', 'male', 'human', 200],
            [2, 'Mary', 'female', 'human', 180],
            [3, 'Pickles', 'male', 'dog', 0]]},
    'prompt': 'In SQL, data is usually organized in various tables. For example, a sports team database might have the tables <em>teams</em>, <em>players</em>, and <em>games</em>. A wedding database might have tables <em>guests</em>, <em>vendors</em>, and <em>music_playlist</em>.<br/><br/>Imagine we have a table that stores family members with each member\'s name, species, gender, and number of books read.<br/><br/>Let\'s start by grabbing all of the data in one table.  We have a table called <strong>family_members</strong> that is shown below.  In order to grab all of that data, please run the following command: <code>SELECT * FROM family_members;</code><br/><br/>The <code>*</code> above means that all of the columns will be returned, which in this case are <em>id</em>, <em>name</em>, <em>gender</em>, <em>species</em>, and <em>num_books_read</em>. <br/><br/>Note: This tutorial uses the <a href="http://en.wikipedia.org/wiki/SQLite" target="_blank">SQLite</a> database engine.  The different variants of SQL use slightly different syntax.'},

    {'name': 'SELECT specific columns',
        'short_name': 'select_columns',
        'database_type': 'family',
        'answer': {'columns': ['name', 'species'],
            'values': [['Dave', 'human'],
                ['Mary', 'human'],
                ['Pickles', 'dog']]},
        'prompt': '<code>SELECT *</code> grabs all fields (called columns) in a table. If we only wanted to see the name and num_books_read columns, we would type<br/> <code>SELECT name, num_books_read FROM family_members;</code>.<br/><br/>Can you return just the name and species columns?'},

    {'name': 'WHERE ... Equals',
        'short_name': 'where_equals',
        'database_type': 'family',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'num_books_read'],
            'values': [[3, 'Pickles', 'male', 'dog', 0]]},
        'prompt': 'In order to select particular rows from this table, we use the <code>WHERE</code> keyword.  So for example, if we wanted to grab all of the rows that correspond to humans, we would type <br/><code>SELECT * FROM family_members WHERE species = \'human\';</code><br/>  Note that the quotes have to be around the word human, as it is an explicit value, unlike a keyword such as <code>WHERE</code>.<br/><br/>Can you run a query that returns all of the rows that refer to dogs?'},

    {'name': 'WHERE ... Greater than',
        'short_name': 'where_greater_than',
        'database_type': 'family',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'num_books_read'],
            'values': [[1, 'Dave', 'male', 'human', 200]]},
        'prompt': 'If we want to only select family members based on a numerical field, we can also use the <code>WHERE</code> keyword.  For example, if we wanted to select family members with a num_books_read, we would type <br/><code>SELECT * FROM family_members WHERE num_books_read > 0;</code><br/><br/>  Can you run return all rows of family members whose num_books_read is greater than 190?'},

    {'name': 'WHERE ... Greater than or equal',
        'short_name': 'where_greater_than_or_equal',
        'database_type': 'family',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'num_books_read'],
            'values': [[1, 'Dave', 'male', 'human', 200],
                [2, 'Mary', 'female', 'human', 180]]},
        'prompt': 'SQL accepts various inequality symbols, including: <br/><code>=</code> "equal to"<br/><code>></code> "greater than"<br/><code><</code> "less than"<br/><code>>=</code> "greater than or equal to"<br/><code><=</code> "less than or equal to"<br/><br/> Can you return all rows in <strong>family_members</strong> where num_books_read is a value greater or equal to 180?'},

    {'name': 'AND',
        'short_name': 'and',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'height_cm'],
            'values': [[5, 'Odie', 'male', 'dog', 40],
                [6, 'Jumpy', 'male', 'dog', 35]]},
        'prompt': 'In the <code>WHERE</code> part of a query, you can search for multiple attributes by using the <code>AND</code> keyword.  For example, if you wanted to find the friends of Pickles that are over 25cm in height and are cats, you would run: <br/><code>SELECT * FROM friends_of_pickles WHERE height_cm > 25 AND species = \'cat\';</code><br/><br/>Can you find all of Pickles\' friends that are dogs and under the height of 45cm?'},

    {'name': 'OR',
        'short_name': 'or',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'height_cm'],
            'values': [[3, 'Fry', 'male', 'cat', 30],
                [4, 'Leela', 'female', 'cat', 25],
                [5, 'Odie', 'male', 'dog', 40],
                [6, 'Jumpy', 'male', 'dog', 35],
                [7, 'Sneakers', 'male', 'dog', 55]]},
        'prompt': 'In the <code>WHERE</code> part of a query, you can search for rows that match any of multiple attributes by using the <code>OR</code> keyword.  For example, if you wanted to find the friends of Pickles that are over 25cm in height or are cats, you would run: <br/><code>SELECT * FROM friends_of_pickles WHERE height_cm > 25 OR species = \'cat\';</code><br/><br/>Can you find all of Pickles\' friends that are dogs or under the height of 45cm?'},

    {'name': 'IN',
        'short_name': 'in',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'height_cm'],
            'values': [[1, 'Dave', 'male', 'human', 180],
                [2, 'Mary', 'female', 'human', 160]]},
        'prompt': 'Using the <code>WHERE</code> clause, we can find rows where a value is in a list of several possible values. <br/><br/><code>SELECT * FROM friends_of_pickles WHERE species IN (\'cat\', \'human\');</code> would return the <strong>friends_of_pickles</strong> that are either a cat or a human. <br/><br/>To find rows that are not in a list, you use <code>NOT IN</code> instead of <code>IN</code>. <br/><br/>Can you run a query that would return the rows that are <strong>not</strong> cats or dogs?'},

    {'name': 'DISTINCT',
        'short_name': 'distinct',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['species'],
            'values': [['human'], ['dog']]},
        'prompt': 'By putting <code>DISTINCT</code> after <code>SELECT</code>, you do not return duplicates. <br/><br/>For example, if you run <br/> <code>SELECT DISTINCT gender, species FROM friends_of_pickles WHERE height_cm < 100;</code>, you will get the gender/species combinations of the animals less than 100cm in height. <br/><br/>Note that even though there are multiple male dogs under that height, we only see one row that returns "male" and "dog".<br/><br/> Can you return a list of the distinct species of animals greater than 50cm in height?'},

    {'name': 'ORDER BY',
        'short_name': 'order_by',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'height_cm'],
            'values': [[1, 'Dave', 'male', 'human', 180],
                [2, 'Mary', 'female', 'human', 160],
                [7, 'Sneakers', 'male', 'dog', 55],
                [5, 'Odie', 'male', 'dog', 40],
                [6, 'Jumpy', 'male', 'dog', 35],
                [3, 'Fry', 'male', 'cat', 30],
                [4, 'Leela', 'female', 'cat', 25]]},
        'prompt': 'If you want to sort the rows by some kind of attribute, you can use the <code>ORDER BY</code> keyword.  For example, if you want to sort the <strong>friends_of_pickles</strong> by name, you would run: <code>SELECT * FROM friends_of_pickles ORDER BY name;</code>.  That returns the names in ascending alphabetical order.<br/><br/> In order to put the names in descending order, you would add a <code>DESC</code> at the end of the query.<br/><br/> Can you run a query that sorts the <strong>friends_of_pickles</strong> by <em>height_cm</em> in descending order?'},

    {'name': 'LIMIT # of returned rows',
        'short_name': 'limit',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'height_cm'],
            'values': [[1, 'Dave', 'male', 'human', 180]]},
        'prompt': 'Often, tables contain millions of rows, and it can take a while to grab everything. If we just want to see a few examples of the data in a table, we can select the first few rows with the <code>LIMIT</code> keyword. If you use <code>ORDER BY</code>, you would get the first rows for that order. <br/><br/>If you wanted to see the two shortest <strong>friends_of_pickles</strong>, you would run: <code>SELECT * FROM friends_of_pickles ORDER BY height_cm LIMIT 2;</code><br/><br/> Can you return the single row (and all columns) of the tallest <strong>friends_of_pickles</strong>?<br/><br/>Note: <br/>- Some variants of SQL do not use the <code>LIMIT</code> keyword.<br/>- The <code>LIMIT</code> keyword comes after the <code>DESC</code> keyword.'},

    {'name': 'COUNT(*)',
        'short_name': 'count',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['COUNT(*)'],
            'values': [[7]]},
        'prompt': 'Another way to explore a table is to check the number of rows in it. For example, if we are querying a table <em>states_of_us</em>, we\'d expect 50 rows, or 500 rows in a table called <em>fortune_500_companies</em>.<br/><br/><code>SELECT COUNT(*) FROM friends_of_pickles;</code> returns the total number of rows in the table <strong>friends_of_pickles</strong>. Try this for yourself.'},

    {'name': 'COUNT(*) ... WHERE',
        'short_name': 'count_where',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['COUNT(*)'],
            'values': [[3]]},
        'prompt': 'We can combine <code>COUNT(*)</code> with <code>WHERE</code> to return the number of rows that matches the <code>WHERE</code> clause.<br/><br/> For example, <code>SELECT COUNT(*) FROM friends_of_pickles WHERE species = \'human\';</code> returns 2.<br/><br/>Can you return the number of rows in <strong>friends_of_pickles</strong> where the species is a dog?'},

    {'name': 'SUM',
        'short_name': 'sum',
        'database_type': 'family_and_legs',
        'answer': {'columns': ['SUM(num_books_read)'],
            'values': [[380]]},
        'prompt': 'We can use the <code>SUM</code> keyword in order to find the sum of a given value. <br/><br/>For example, running <code>SELECT SUM(num_legs) FROM family_members;</code> returns the total number of legs in the family. <br/><br/>Can you find the total num_books_read made by this family?'},

    {'name': 'AVG',
        'short_name': 'avg',
        'database_type': 'family_and_legs',
        'answer': {'columns': ['AVG(num_books_read)'],
            'values': [[126.66666666666667]]},
        'prompt': 'We can use the <code>AVG</code> keyword in order to find the average of a given value. <br/><br/>For example, running <code>SELECT AVG(num_legs) FROM family_members;</code> returns the average number of legs of each family member. <br/><br/>Can you find the average num_books_read made by each family member? <br/><br/>Note: <br/>- Because of the way computers handle numbers, averages will not always be completely exact.'},

    {'name': 'MAX and MIN',
        'short_name': 'max_min',
        'database_type': 'family_and_legs',
        'answer': {'columns': ['MAX(num_books_read)'],
            'values': [[200]]},
        'prompt': 'We can use the <code>MAX</code> and <code>MIN</code> to find the maximum or minimum value of a table. <br/><br/>To find the least number of legs in a family member (<em>2</em>), you can run <br/><code>SELECT MIN(num_legs) FROM family_members;</code> <br/><br/>Can you find the highest num_books_read that a family member makes?'},

    {'name': 'GROUP BY',
        'short_name': 'group_by',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['MAX(height_cm)', 'species'],
            'values': [[30, 'cat'],
                [55, 'dog'],
                [180, 'human']]},
        'prompt': 'You can use aggregate functions such as <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MAX</code>, and <code>MIN</code> with the <code>GROUP BY</code> clause. <br/><br/> When you <code>GROUP BY</code> something, you split the table into different piles based on the value of each row. <br/><br/>For example, <br/><code>SELECT COUNT(*), species FROM friends_of_pickles GROUP BY species;</code> would return the number of rows for each species. <br/><br/> Can you return the tallest height for each species? Remember to return the species name next to the height too, like in the example query.'},

    {'name': 'Nested queries',
        'short_name': 'nested',
        'database_type': 'family_and_legs',
        'required': ['(', ')'],
        'custom_error_message': 'You must use a nested query in your answer.',
        'answer': {'columns': ['id', 'name', 'species', 'num_books_read', 'num_legs'],
            'values': [[1, 'Dave', 'human', 200, 2]]},
        'prompt': 'In SQL, you can put a SQL query inside another SQL query. <br/><br/>For example, to find the family members with the least number of legs, <br/> you can run: <br/><code>SELECT * FROM family_members WHERE num_legs = (SELECT MIN(num_legs) FROM family_members);</code> <br/><br/> The <code>SELECT</code> query inside the parentheses is executed first, and returns the minimum number of legs.  Then, that value (2) is used in the outside query, to find all family members that have 2 legs. <br/><br/> Can you return the family members that have the highest num_books_read?'},

    {'name': 'NULL',
        'short_name': 'null',
        'database_type': 'family_null',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'favorite_book'],
            'values': [[1, 'Dave', 'male', 'human', 'To Kill a Mockingbird'],
                [2, 'Mary', 'female', 'human', 'Gone with the Wind']]},
        'prompt': 'Sometimes, in a given row, there is no value at all for a given column.  For example, a dog does not have a favorite book, so in that case there is no point in putting a value in the <em>favorite_book</em> column, and the value is <code>NULL</code>.  In order to find the rows where the value for a column is or is not <code>NULL</code>, you would use <code>IS NULL</code> or <code>IS NOT NULL</code>.<br/><br/>Can you return all of the rows of <strong>family_members</strong> where <em>favorite_book</em> is not null?'},

    {'name': 'Date',
        'short_name': 'date',
        'database_type': 'celebs_born',
        'answer': {'columns': ['id', 'name', 'birthdate'],
            'values': [[2, 'Justin Timberlake', '1981-01-31'],
                [3, 'Taylor Swift', '1989-12-13']]},
        'prompt': 'Sometimes, a column can contain a date value.  The first 4 digits represents the year, the next 2 digits represents the month, and the next 2 digits represents the day of the month.  For example, <code>1985-07-20</code> would mean July 20, 1985.<br/><br/>You can compare dates by using <code><</code> and <code>></code>.  For example, <code>SELECT * FROM celebs_born WHERE birthdate < \'1985-08-17\';</code> returns a list of celebrities that were born before August 17th, 1985.<br/><br/>Can you return a list of celebrities that were born after September 1st, 1980?'},

    {'name': 'Inner joins',
        'short_name': 'joins',
        'database_type': 'tv',
        'answer': {'columns': ['name', 'name'],
            'values': [['Doogie Howser', 'Neil Patrick Harris'],
                ['Barney Stinson', 'Neil Patrick Harris'],
                ['Lily Aldrin', 'Alyson Hannigan'],
                ['Willow Rosenberg', 'Alyson Hannigan']]},
        'prompt': 'Different parts of information can be stored in different tables, and in order to put them together, we use <code>INNER JOIN ... ON</code>. Joining tables gets to the core of SQL functionality, but it can get very complicated. We will start with a simple example, and will start with an <code>INNER JOIN</code>.<br/><br/>There are 3 tables:<br/><strong>character</strong>: The details of each character, including the actor and tv show<br/><strong>tv_show:</strong> The name and rating of each tv show<br/><strong>actor</strong>: The details of each character.<br/><br/>See that in <strong>character</strong>, instead of storing the actor and TV show names and ratings, it stores the <em>actor_id</em> and <em>tv_show_id</em> instead. These <em>actor_id</em> and <em>tv_show_id</em> columns refer to the matching <em>id</em> row from the <strong>actor</strong> and <strong>tv_show</strong> tables respectively. <br/><br/>This allows us to "join" the tables together "on" that reference/common column. <br/><br/>This is done so data is not duplicated.  For example, if the name of a character were to change, you would only have to change the name of the character in one row. <br/><br/>To get each character name with his/her TV show name and rating, we can write <br/><code>SELECT <br/>' +
            '   &nbsp; character.id,<br/>' +
            '   &nbsp; character.name,<br/>' +
            '   &nbsp; tv_show.name AS tv_show_name,<br/>' +
            '   &nbsp; tv_show.rating<br/>' +
            'FROM character<br/>' +
            'INNER JOIN tv_show<br/>' +
            'ON character.tv_show_id = tv_show.id;</code><br/>This puts together every row in <strong>character</strong> with the corresponding row in <strong>tv_show</strong>.<br/><br/>Note:<br/>- We use the syntax <strong>table_name</strong>.<em>column_name</em>. If we only used <em>column_name</em>, SQL might incorrectly assume which table it is coming from.<br/> - The example query above is written over multiple lines for readability, but that does not affect the query. <br/><br/>Can you use an inner join to pair each character name with the actor who plays them?  Select the columns: <strong>character</strong>.<em>name</em>, <strong>actor</strong>.<em>name</em>'},

    {'name': 'Multiple joins',
        'short_name': 'multiple_joins',
        'database_type': 'library',
        'answer': {'columns': ['first_name', 'last_name'],
            'values': [['Saurav', 'Zwane'],
                ['Nicole', 'Brogan']]},
        'prompt': 'In this exercise we have a many-to-many relationship between Authors and Books. This means that authors can write many books and books can have many (co)authors. <br/></br>The <strong>authors</strong> and <strong>books</strong> tables represent things (also known as entities) and the <strong>book_author</strong> table captures the relationship between two entities. <br/><br/> Each tuple in the <strong>book_author</strong> table contains author and book ids and captures the fact that an author wrote (or co-wrote) a particular book. <br/><br/>Can you query a list of all of the authors who wrote the book "Database Design"?  Select the columns: <strong>authors</strong>.<em>first_name</em> and <strong>authors</strong>.<em>last_name</em> <br/><br/>Hint: you will need to use two <code>INNER JOIN ... ON</code> statements followed by a <code>WHERE</code> clause.'},

    {'name': 'Joins with WHERE',
        'short_name': 'joins_with_where',
        'required': ['Willow Rosenberg', 'How I Met Your Mother'],
        'custom_error_message': 'You must check that the characters are not named "Willow Rosenberg" and not in the show "How I Met Your Mother".',
        'database_type': 'tv_normalized',
        'answer': {'columns': ['name', 'name'],
            'values': [['Doogie Howser', 'Doogie Howser, M.D.']]},
        'prompt': 'You can also use joins with the <code>WHERE</code> clause. <br/><br/> To get a list of characters and TV shows that are not in "Buffy the Vampire Slayer" and are not Barney Stinson, you would run: <br/> <code>SELECT character.name, tv_show.name<br/> FROM character <br/>INNER JOIN character_tv_show<br/> ON character.id = character_tv_show.character_id<br/>INNER JOIN tv_show<br/> ON character_tv_show.tv_show_id = tv_show.id WHERE character.name != \'Barney Stinson\' AND tv_show.name != \'Buffy the Vampire Slayer\';</code> <br/><br/>Can you return a list of characters and TV shows that are not named "Willow Rosenberg" and not in the show "How I Met Your Mother"?'},

    // {'name': 'Left joins',
    //     'short_name': 'left_joins',
    //     'database_type': 'tv_extra',
    //     'answer': {'columns': ['name', 'name'],
    //         'values': [['Doogie Howser', 'Neil Patrick Harris'],
    //             ['Barney Stinson', 'Neil Patrick Harris'],
    //             ['Lily Aldrin', 'Alyson Hannigan'],
    //             ['Willow Rosenberg', 'Alyson Hannigan'],
    //             ['Steve Urkel', null],
    //             ['Homer Simpson', null]]},
    //     'prompt': 'In the previous exercise, we used joins to match up TV character names with their actors.  When you use <code>INNER JOIN</code>, that is called an "inner join" because it only returns rows where there is data for both the character name and the actor. <br/><br/> However, perhaps you want to get all of the character names, even if there isn\'t corresponding data for the name of the actor.  A <code>LEFT JOIN</code> returns all of the data from the first (or "left") table, and if there isn\'t corresponding data for the second table, it returns <code>NULL</code> for those columns. <br/><br/> Using left joins between character names and TV shows would look like this: <br/><code>SELECT character.name, tv_show.name<br/> FROM character <br/>LEFT JOIN character_tv_show<br/> ON character.id = character_tv_show.character_id<br/> LEFT JOIN tv_show<br/> ON character_tv_show.tv_show_id = tv_show.id;</code> <br/><br/> Can you use left joins to match character names with the actors that play them?  Select the columns: <strong>character</strong>.<em>name</em>, <strong>actor</strong>.<em>name</em> <br/><br/>Note: Other variants of SQL have <code>RIGHT JOIN</code> and <code>OUTER JOIN</code>, but those features are not present in SQLite.'},

    {'name': 'Table alias',
        'short_name': 'table_alias',
        'required': ['AS', 'c.name', 'a.name'],
        'custom_error_message': 'You must use table aliases as described above.',
        'database_type': 'tv_extra',
        'answer': {'columns': ['name', 'name'],
            'values': [['Doogie Howser', 'Neil Patrick Harris'],
                ['Barney Stinson', 'Neil Patrick Harris'],
                ['Lily Aldrin', 'Alyson Hannigan'],
                ['Willow Rosenberg', 'Alyson Hannigan'],
                ['Steve Urkel', null],
                ['Homer Simpson', null]]},
        'prompt': 'These queries are starting to get pretty long! <br/><br/>In the previous exercise, we ran a query containing the tables <strong>character</strong>, <strong>tv_show</strong>, and <strong>character_tv_show</strong>.  We can write a shorter query if we used aliases for those tables.  Basically, we create a "nickname" for that table. <br/><br/> If you want to use an alias for a table, you add <code>AS *alias_name*</code> after the table name. <br/><br/> For example, to use left joins between characters and tv shows with aliases, you would run: <br/> <code>SELECT c.name, t.name<br/>FROM character AS c<br/>LEFT JOIN character_tv_show AS ct<br/>ON c.id = ct.character_id<br/>LEFT JOIN tv_show AS t<br/>ON ct.tv_show_id = t.id;</code> <br/><br/> As you can see, it is shorter than the query in the previous exercise.<br/><br/> Can you use left joins to match character names with the actors that play them, and use aliases to make the query shorter?  The aliases for <strong>character</strong>, <strong>character_actor</strong>, and <strong>actor</strong> should be <strong>c</strong>, <strong>ca</strong>, and <strong>a</strong>. <br/><br/>Select the columns: <strong>c</strong>.<em>name</em>, <strong>a</strong>.<em>name</em>'},

    {'name': 'Column alias',
        'short_name': 'column_alias',
        'database_type': 'tv_extra',
        'answer': {'columns': ['character', 'actor'],
            'values': [['Doogie Howser', 'Neil Patrick Harris'],
                ['Barney Stinson', 'Neil Patrick Harris'],
                ['Lily Aldrin', 'Alyson Hannigan'],
                ['Willow Rosenberg', 'Alyson Hannigan'],
                ['Steve Urkel', null],
                ['Homer Simpson', null]]},
        'prompt': 'In addition to making aliases for tables, you can also make them for columns. <br/><br/>  This clears up confusion on which column is which.  In the previous exercise, both columns in the result are simply called "name", and that can be confusing. <br/><br/> If you want to use an alias for a column, you add <code>AS *alias_name*</code> after the column name. <br/><br/>  If we wanted to use left joins between character names and TV shows and clearly denote which column has character names, and which has TV show names, it would look like this: <br/><code>SELECT character.name AS character, tv_show.name AS name<br/> FROM character <br/>LEFT JOIN character_tv_show<br/> ON character.id = character_tv_show.character_id<br/> LEFT JOIN tv_show<br/> ON character_tv_show.tv_show_id = tv_show.id;</code> <br/><br/>Can you use left joins to match character names with the actors that play them, and use aliases to call the two columns returned <em>character</em> and <em>actor</em>?'},

    {'name': 'Self joins',
        'short_name': 'self_join',
        'database_type': 'self_join',
        'answer': {'columns': ['employee_name', 'boss_name'],
            'values': [['Patrick Smith', 'Abigail Reed'],
                ['Abigail Reed', 'Bob Carey'],
                ['Bob Carey', 'Maxine Tang']]},
        'prompt': 'Sometimes, it may make sense for you to do a self join.  In that case, you need to use table aliases to determine which data is from the "first"/"left" table. <br/><br/>For example, to get a list of Rock Paper Scissors objects and the objects they beat, you can run the following: <br/><code>SELECT r1.name AS object, r2.name AS beats <br/>FROM rps AS r1 <br/>INNER JOIN rps AS r2 <br/>ON r1.defeats_id = r2.id;</code><br/><br/> Can you run a query that returns the name of an employee and the name of their boss?  Use column aliases to make the columns <em>employee_name</em> and <em>boss_name</em>.'},

    {'name': 'LIKE',
        'short_name': 'like',
        'database_type': 'robot',
        'answer': {'columns': ['id', 'name'],
            'values': [[1, 'Robot 2000'],
                [2, 'Champion Robot 2001'],
                [4, 'Turbo Robot 2002'],
                [5, 'Super Robot 2003'],
                [6, 'Super Turbo Robot 2004']]},
        'prompt': 'In SQL, you can use the <code>LIKE</code> command in order to search through text-based values.  With <code>LIKE</code>, there are two special characters: <code>%</code> and <code>_</code>. <br/><br/> The percent sign (<code>%</code>) represents zero, one, or multiple characters. <br/><br/> The underscore (<code>_</code>) represents one character. <br/><br/> For example, <code>LIKE "SUPER _"</code> would match values such as "SUPER 1", "SUPER A", and "SUPER Z". <br/><br/> <code>LIKE "SUPER%"</code> would match any value where <code>SUPER</code> is at the beginning, such as "SUPER CAT", "SUPER 123", or even "SUPER" by itself. <br/><br/> <code>SELECT * FROM robots WHERE name LIKE "%Robot%";</code> would yield all values that contain "Robot" in the name.  Can you run a query that returns "Robot" followed by a year between 2000 and 2099? (So 2015 is a valid value at the end, but 2123 is not.) <br/><br/> Note: <code>LIKE</code> queries are <strong>not</strong> case sensitive.'},

    {'name': 'CASE',
        'short_name': 'case',
        'database_type': 'friends_of_pickles',
        'answer': {'columns': ['id', 'name', 'gender', 'species', 'height_cm', 'sound'],
            'values': [[1, 'Dave', 'male', 'human', 180, 'talk'],
                [2, 'Mary', 'female', 'human', 160, 'talk'],
                [3, 'Fry', 'male', 'cat', 30, 'meow'],
                [4, 'Leela', 'female', 'cat', 25, 'meow'],
                [5, 'Odie', 'male', 'dog', 40, 'bark'],
                [6, 'Jumpy', 'male', 'dog', 35, 'bark'],
                [7, 'Sneakers', 'male', 'dog', 55, 'bark']]},
        'prompt': 'You can use a <code>CASE</code> statement to return certain values when certain scenarios are true. <br/><br/> A <code>CASE</code> statement takes the following form: <br/><br/> <code>CASE WHEN *first thing is true* THEN *value1*<br/>WHEN *second thing is true* THEN *value2*<br/>...<br/>ELSE *value for all other situations* <br/> END </code> <br/><br/> For example, in order to return the number of legs for each row in <strong>friends_of_pickles</strong>, you could run: <br/> <code>SELECT *, <br/> CASE WHEN species = \'human\' THEN 2 ELSE 4 END AS num_legs <br/> FROM friends_of_pickles;</code><br/><br/> Can you return the results with a column named <em>sound</em> that returns "talk" for humans, "bark" for dogs, and "meow" for cats?'},

    {'name': 'SUBSTR',
        'short_name': 'substr',
        'database_type': 'robot_code',
        'answer': {'columns': ['id', 'name', 'location'],
            'values': [[1, 'R2000 - Robot 2000', 'New City, NY'],
                [3, 'D0001 - Dragon', 'New York City, NY'],
                [4, 'R2002 - Turbo Robot 2002', 'Spring Valley, NY'],
                [5, 'R2003 - Super Robot 2003', 'Nyack, NY'],
                [8, 'U2111 - Unreleased Turbo Robot 2111', 'Buffalo, NY']]},
        'prompt': 'In SQL, you can search for the substring of a given value.  Perhaps a location is stored in the format "city, state" and you just want to grab the state. <br/><br/> SUBSTR is used in this format: <code>SUBSTR(<em>column_name</em>, <em>index</em>, <em>number_of_characters</em>)</code> <br/><br/> <em>index</em> is a number that denotes where you would start the substring.  1 would indicate the first character, 2 would indicated the second character, etc.  The index could also be negative, which means you would count from the end of the string.  -1 would denote the last character, -2 would denote the 2nd to last character, etc. <br/><br/> <em>number_of_characters</em> is optional; if it is not included, the substring contains the "rest of the string". <br/><br/>Here are some examples:<br/> <code>SUBSTR(name, 1, 5)</code> is the first 5 characters of the name. <br/> <code>SUBSTR(name, -4)</code> is the last 4 characters of the name. <br/><br/><code>SELECT * FROM robots WHERE SUBSTR(name, -4) LIKE \'20__\';</code> is another way of returning all of the robots that have been released between 2000 and 2099.<br/><br/>Note: In other versions of SQL, you could use <code>RIGHT</code> to do this.<br/><br/> Can you return all of the robots that are located in NY?'},

    {'name': 'COALESCE',
        'short_name': 'coalesce',
        'database_type': 'fighting',
        'answer': {'columns': ['name', 'weapon'],
            'values': [['US Marine', 'M1A1 Abrams Tank'],
                ['John Wilkes Booth', '.44 caliber Derringer'],
                ['Zorro', 'Sword of Zorro'],
                ['Innocent Bystander', null]]},
        'prompt': '<code>COALESCE</code> takes a list of columns, and returns the value of the first column that is not null. <br/><br/>Suppose we wanted to find the most powerful weapon that a combatant has on hand.  If value of <em>gun</em> is not null, that is the value returned.  Otherwise, the value of <em>sword</em> is returned.  Then you would run: <br/> <code>SELECT name, COALESCE(gun, sword) AS weapon FROM fighters;</code> <br/><br/> Suppose that a fighter\'s tank could count as a weapon, and it would take precedence over the gun and the sword.  Could you find each fighter\'s weapon in that scenario?'}
];

const databases = {
    'family': "CREATE TABLE family_members (id int PRIMARY KEY, name char, gender char, species char, num_books_read int);"
        + "INSERT INTO family_members VALUES (1, 'Dave', 'male', 'human', 200);"
        + "INSERT INTO family_members VALUES (2, 'Mary', 'female', 'human', 180);"
        + "INSERT INTO family_members VALUES (3, 'Pickles', 'male', 'dog', 0);",
    'friends_of_pickles': "CREATE TABLE friends_of_pickles (id int PRIMARY KEY, name char, gender char, species char, height_cm int);"
        + "INSERT INTO friends_of_pickles VALUES (1, 'Dave', 'male', 'human', 180);"
        + "INSERT INTO friends_of_pickles VALUES (2, 'Mary', 'female', 'human', 160);"
        + "INSERT INTO friends_of_pickles VALUES (3, 'Fry', 'male', 'cat', 30);"
        + "INSERT INTO friends_of_pickles VALUES (4, 'Leela', 'female', 'cat', 25);"
        + "INSERT INTO friends_of_pickles VALUES (5, 'Odie', 'male', 'dog', 40);"
        + "INSERT INTO friends_of_pickles VALUES (6, 'Jumpy', 'male', 'dog', 35);"
        + "INSERT INTO friends_of_pickles VALUES (7, 'Sneakers', 'male', 'dog', 55);",
    'family_and_legs': "CREATE TABLE family_members (id int PRIMARY KEY, name char, species char, num_books_read int, num_legs int);"
        + "INSERT INTO family_members VALUES (2, 'Mary', 'human', 180, 2);"
        + "INSERT INTO family_members VALUES (3, 'Pickles', 'dog', 0, 4);"
        + "INSERT INTO family_members VALUES (1, 'Dave', 'human', 200, 2);",
    'family_null': "CREATE TABLE family_members (id int PRIMARY KEY, name char, gender char, species char, favorite_book char);"
        + "INSERT INTO family_members VALUES (1, 'Dave', 'male', 'human', 'To Kill a Mockingbird');"
        + "INSERT INTO family_members VALUES (2, 'Mary', 'female', 'human', 'Gone with the Wind');"
        + "INSERT INTO family_members VALUES (3, 'Pickles', 'male', 'dog', NULL);",
    'celebs_born': "CREATE TABLE celebs_born (id int PRIMARY KEY, name char, birthdate date);"
        + "INSERT INTO celebs_born VALUES (1, 'Michael Jordan', '1963-02-17');"
        + "INSERT INTO celebs_born VALUES (2, 'Justin Timberlake', '1981-01-31');"
        + "INSERT INTO celebs_born VALUES (3, 'Taylor Swift', '1989-12-13');",
    'tv': "CREATE TABLE character (id int PRIMARY KEY, name char, actor_id int, tv_show_id int);"
        + "INSERT INTO character VALUES (1, 'Doogie Howser', 2, 3);"
        + "INSERT INTO character VALUES (2, 'Barney Stinson', 2, 2);"
        + "INSERT INTO character VALUES (3, 'Lily Aldrin', 1, 2);"
        + "INSERT INTO character VALUES (4, 'Willow Rosenberg', 1, 1);"
        + "CREATE TABLE tv_show (id int PRIMARY KEY, name char, rating float);"
        + "INSERT INTO tv_show VALUES (1, 'Buffy the Vampire Slayer', 6.2);"
        + "INSERT INTO tv_show VALUES (2, 'How I Met Your Mother', 7.4);"
        + "INSERT INTO tv_show VALUES (3, 'Doogie Howser, M.D.', 3.9);"
        + "CREATE TABLE actor (id int PRIMARY KEY, name char);"
        + "INSERT INTO actor VALUES (1, 'Alyson Hannigan');"
        + "INSERT INTO actor VALUES (2, 'Neil Patrick Harris');",
    'library': "CREATE TABLE books (id int PRIMARY KEY, title char, price int);"
        + "INSERT INTO books VALUES (1, 'How To Read', 300);"
        + "INSERT INTO books VALUES (2, 'Database Design', 285);"
        + "INSERT INTO books VALUES (3, 'The Lion, the Witch and the First-Years', 290);"
        + "INSERT INTO books VALUES (4, 'Why You Need Robot Horses', 310);"
        + "CREATE TABLE authors (id int PRIMARY KEY, first_name char, last_name char);"
        + "INSERT INTO authors VALUES (1, 'Saurav', 'Zwane');"
        + "INSERT INTO authors VALUES (2, 'Skosana', 'Mfiki');"
        + "INSERT INTO authors VALUES (3, 'Nicole', 'Brogan');"
        + "CREATE TABLE book_author (book int, author int, PRIMARY KEY (book, author), FOREIGN KEY (book) REFERENCES books (id), FOREIGN KEY (author) REFERENCES authors (id));"
        + "INSERT INTO book_author VALUES(1, 3);"
        + "INSERT INTO book_author VALUES(2, 1);"
        + "INSERT INTO book_author VALUES(3, 1);"
        + "INSERT INTO book_author VALUES(4, 2);"
        + "INSERT INTO book_author VALUES(2, 3);",
    'tv_normalized': "CREATE TABLE character (id int PRIMARY KEY, name char);"
        + "INSERT INTO character VALUES (1, 'Doogie Howser');"
        + "INSERT INTO character VALUES (2, 'Barney Stinson');"
        + "INSERT INTO character VALUES (3, 'Lily Aldrin');"
        + "INSERT INTO character VALUES (4, 'Willow Rosenberg');"
        + "CREATE TABLE tv_show (id int PRIMARY KEY, name char);"
        + "INSERT INTO tv_show VALUES (1, 'Buffy the Vampire Slayer');"
        + "INSERT INTO tv_show VALUES (2, 'How I Met Your Mother');"
        + "INSERT INTO tv_show VALUES (3, 'Doogie Howser, M.D.');"
        + "CREATE TABLE character_tv_show (character_id int, tv_show_id int, PRIMARY KEY (character_id, tv_show_id));"
        + "INSERT INTO character_tv_show VALUES (1, 3);"
        + "INSERT INTO character_tv_show VALUES (2, 2);"
        + "INSERT INTO character_tv_show VALUES (3, 2);"
        + "INSERT INTO character_tv_show VALUES (4, 1);"
        + "CREATE TABLE actor (id int PRIMARY KEY, name char);"
        + "INSERT INTO actor VALUES (1, 'Alyson Hannigan');"
        + "INSERT INTO actor VALUES (2, 'Neil Patrick Harris');"
        + "CREATE TABLE character_actor (character_id int, actor_id int, PRIMARY KEY (character_id, actor_id));"
        + "INSERT INTO character_actor VALUES (1, 2);"
        + "INSERT INTO character_actor VALUES (2, 2);"
        + "INSERT INTO character_actor VALUES (3, 1);"
        + "INSERT INTO character_actor VALUES (4, 1);",
    'tv_extra': "CREATE TABLE character (id int PRIMARY KEY, name char);"
        + "INSERT INTO character VALUES (1, 'Doogie Howser');"
        + "INSERT INTO character VALUES (2, 'Barney Stinson');"
        + "INSERT INTO character VALUES (3, 'Lily Aldrin');"
        + "INSERT INTO character VALUES (4, 'Willow Rosenberg');"
        + "INSERT INTO character VALUES (5, 'Steve Urkel');"
        + "INSERT INTO character VALUES (6, 'Homer Simpson');"
        + "CREATE TABLE tv_show (id int PRIMARY KEY, name char);"
        + "INSERT INTO tv_show VALUES (1, 'Buffy the Vampire Slayer');"
        + "INSERT INTO tv_show VALUES (2, 'How I Met Your Mother');"
        + "INSERT INTO tv_show VALUES (3, 'Doogie Howser, M.D.');"
        + "INSERT INTO tv_show VALUES (4, 'Friends');"
        + "CREATE TABLE character_tv_show (character_id int, tv_show_id int, PRIMARY KEY (character_id, tv_show_id));"
        + "INSERT INTO character_tv_show VALUES (1, 3);"
        + "INSERT INTO character_tv_show VALUES (2, 2);"
        + "INSERT INTO character_tv_show VALUES (3, 2);"
        + "INSERT INTO character_tv_show VALUES (4, 1);"
        + "CREATE TABLE actor (id int PRIMARY KEY, name char);"
        + "INSERT INTO actor VALUES (1, 'Alyson Hannigan');"
        + "INSERT INTO actor VALUES (2, 'Neil Patrick Harris');"
        + "INSERT INTO actor VALUES (3, 'Adam Sandler');"
        + "INSERT INTO actor VALUES (4, 'Steve Carell');"
        + "CREATE TABLE character_actor (character_id int, actor_id int, PRIMARY KEY (character_id, actor_id));"
        + "INSERT INTO character_actor VALUES (1, 2);"
        + "INSERT INTO character_actor VALUES (2, 2);"
        + "INSERT INTO character_actor VALUES (3, 1);"
        + "INSERT INTO character_actor VALUES (4, 1);",
    'self_join': "CREATE TABLE rps (id int PRIMARY KEY, name char, defeats_id int);"
        + "INSERT INTO rps VALUES (1, 'Rock', 3);"
        + "INSERT INTO rps VALUES (2, 'Paper', 1);"
        + "INSERT INTO rps VALUES (3, 'Scissors', 2);"
        + "CREATE TABLE employees (id int PRIMARY KEY, name char, title char, boss_id int);"
        + "INSERT INTO employees VALUES (1, 'Patrick Smith', 'Software Engineer', 2);"
        + "INSERT INTO employees VALUES (2, 'Abigail Reed', 'Engineering Manager', 3);"
        + "INSERT INTO employees VALUES (3, 'Bob Carey', 'Director of Engineering', 4);"
        + "INSERT INTO employees VALUES (4, 'Maxine Tang', 'CEO', null);",
    'robot': "CREATE TABLE robots (id int PRIMARY KEY, name char);"
        + "INSERT INTO robots VALUES (1, 'Robot 2000');"
        + "INSERT INTO robots VALUES (2, 'Champion Robot 2001');"
        + "INSERT INTO robots VALUES (3, 'Dragon');"
        + "INSERT INTO robots VALUES (4, 'Turbo Robot 2002');"
        + "INSERT INTO robots VALUES (5, 'Super Robot 2003');"
        + "INSERT INTO robots VALUES (6, 'Super Turbo Robot 2004');"
        + "INSERT INTO robots VALUES (7, 'Not A Robot');"
        + "INSERT INTO robots VALUES (8, 'Unreleased Turbo Robot 2111');",
    'robot_code': "CREATE TABLE robots (id int PRIMARY KEY, name char, location char);"
        + "INSERT INTO robots VALUES (1, 'R2000 - Robot 2000', 'New City, NY');"
        + "INSERT INTO robots VALUES (2, 'R2001 - Champion Robot 2001', 'Palo Alto, CA');"
        + "INSERT INTO robots VALUES (3, 'D0001 - Dragon', 'New York City, NY');"
        + "INSERT INTO robots VALUES (4, 'R2002 - Turbo Robot 2002', 'Spring Valley, NY');"
        + "INSERT INTO robots VALUES (5, 'R2003 - Super Robot 2003', 'Nyack, NY');"
        + "INSERT INTO robots VALUES (6, 'R2004 - Super Turbo Robot 2004', 'Tampa, FL');"
        + "INSERT INTO robots VALUES (7, 'N0001 - Not A Robot', 'Seattle, WA');"
        + "INSERT INTO robots VALUES (8, 'U2111 - Unreleased Turbo Robot 2111', 'Buffalo, NY');",
    'fighting': "CREATE TABLE fighters (id int PRIMARY KEY, name char, gun char, sword char, tank char);"
        + "INSERT INTO fighters VALUES (1, 'US Marine', 'Colt 9mm SMG', 'Swiss Army Knife', 'M1A1 Abrams Tank');"
        + "INSERT INTO fighters VALUES (2, 'John Wilkes Booth', '.44 caliber Derringer', null, null);"
        + "INSERT INTO fighters VALUES (3, 'Zorro', null, 'Sword of Zorro', null);"
        + "INSERT INTO fighters VALUES (4, 'Innocent Bystander', null, null, null);"
}
