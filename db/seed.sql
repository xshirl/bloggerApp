-- \c blogs


INSERT INTO users(email, pw_digest, username)
VALUES('xshirl525@gmail.com', '12345', 'xshirl');

INSERT INTO posts(img, title, content, user_id)
VALUES('https://www.gardeningknowhow.com/wp-content/uploads/2018/06/fall-leaves.jpg', 'Almost fall!', 'Its almost fall! Fall is my favorite season. What is your favorite season?', 1), ('https://cdn.vox-cdn.com/thumbor/3M4Bo3V_vatpoZesCNzSqqm14AA=/0x16:717x391/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20104095/legend_korra.png', 'Korra', 'I just started watching the second season of Korra. Not as good as avatar but still good', 1);

