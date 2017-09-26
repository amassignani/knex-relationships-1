exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({ id: 1, user_id: 99901, url: 'heyarthur.com', profile_picture: 'http://tvokids.com/sites/default/files/program_character_banner_images/CharBub_arthur2_0.jpg' }),
        knex('profiles').insert({ id: 2, user_id: 99902, url: 'heybravo.com', profile_picture: 'https://cdn3.whatculture.com/images/2013/11/Arnold.png' }),
        knex('profiles').insert({ id: 3, user_id: 99903, url: 'heycharlie.com', profile_picture: 'https://images-na.ssl-images-amazon.com/images/I/41xgjPGILRL._SY300_.jpg' }),
        knex('profiles').insert({ id: 4, user_id: 99904, url: 'heydelta.com', profile_picture: 'https://assets.fxnetworks.com/cms/prod/2016/12/simpsonsworld_social_og_barney_1200x1200.jpg' }),
        knex('profiles').insert({ id: 5, user_id: 99905, url: 'heyecho.com', profile_picture: 'https://vignette2.wikia.nocookie.net/familyguy/images/7/72/Stewie_Griffin.jpg/revision/latest?cb=20130812175654' }),
        knex('profiles').insert({ id: 6, user_id: 99906, url: 'heyfoxtrot.com', profile_picture: 'https://i.ytimg.com/vi/203OAQYDKNw/maxresdefault.jpg' }),
        knex('profiles').insert({ id: 7, user_id: 99907, url: 'heygolf.com', profile_picture: 'https://ewedit.files.wordpress.com/2016/03/archer_0.jpg?w=612' }),
        knex('profiles').insert({ id: 8, user_id: 99908, url: 'heyhotel.com', profile_picture: 'http://images.mentalfloss.com/sites/default/files/spongebob_0.jpg?resize=1100x740' }),
        knex('profiles').insert({ id: 9, user_id: 99909, url: 'heyindia.com', profile_picture: 'https://vignette.wikia.nocookie.net/johnnybravo/images/b/bb/Johnnyb001.gif/revision/latest/scale-to-width-down/250?cb=20120620184904' }),
        knex('profiles').insert({ id: 10, user_id: 99910, url: 'heyjuliet.com', profile_picture: 'https://vignette.wikia.nocookie.net/powerpuff/images/4/4b/BUTTERCUP.jpeg.jpg/revision/latest?cb=20130602234515' }),
        knex('profiles').insert({ id: 11, user_id: 99911, url: 'heykilo.com', profile_picture: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/22/17/campaign_images/webdr01/signs-you-are-actually-helga-from-hey-arnold-2-2040-1453500703-2_dblbig.jpg' }),
        knex('profiles').insert({ id: 12, user_id: 99912, url: 'heylima.com', profile_picture: 'https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_Peach.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png' }),
        knex('profiles').insert({ id: 13, user_id: 99913, url: 'heymike.com', profile_picture: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Gohan_Lithograph.PNG' }),
        knex('profiles').insert({ id: 14, user_id: 99914, url: 'heynovember.com', profile_picture: 'https://vignette4.wikia.nocookie.net/p__/images/c/ce/Katara%27s_Fire_Nation_Outfit.jpg/revision/latest?cb=20120122062844&path-prefix=protagonist' }),
        knex('profiles').insert({ id: 15, user_id: 99915, url: 'heyoscar.com', profile_picture: 'https://s-media-cache-ak0.pinimg.com/originals/34/06/b9/3406b90bcfb4fb8d791deb9f312e04c2.jpg' }),
        knex('profiles').insert({ id: 16, user_id: 99916, url: 'heypapa.com', profile_picture: 'https://pbs.twimg.com/profile_images/1909416809/jessie37_400x400.jpg' }),
        knex('profiles').insert({ id: 17, user_id: 99917, url: 'heyquebec.com', profile_picture: 'http://www.factfiend.com/wp-content/uploads/2014/04/Brock-pokemon-18232516-418-358.jpg' }),
        knex('profiles').insert({ id: 18, user_id: 99918, url: 'heyromeo.com', profile_picture: 'http://www.tvovermind.com/wp-content/uploads/2017/08/Paul-Dini-life-connection-Batman-animated.jpg' }),
        knex('profiles').insert({ id: 19, user_id: 99919, url: 'heysierra.com', profile_picture: 'http://static.tvtropes.org/pmwiki/pub/images/captain-planet2_8052.jpg' }),
        knex('profiles').insert({ id: 20, user_id: 99920, url: 'heytango.com', profile_picture: 'https://i.pinimg.com/736x/bd/8e/28/bd8e28de2a6282abfe3c8973ec2bbad7--miss-frizzle-costume-school-buses.jpg' }),
        knex('profiles').insert({ id: 21, user_id: 99921, url: 'heyuniform.com', profile_picture: 'https://68.media.tumblr.com/aaaba6c9aa72446f44588730e663444e/tumblr_inline_nhq3xeCmYn1ruaykv.jpg' }),
        knex('profiles').insert({ id: 22, user_id: 99922, url: 'heyvictor.com', profile_picture: 'http://www.writeups.org/wp-content/uploads/Ron-Stoppable-Kim-Possible.jpg' }),
        knex('profiles').insert({ id: 23, user_id: 99923, url: 'heywhiskey.com', profile_picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Ren_H%C3%B6ek.jpg/220px-Ren_H%C3%B6ek.jpg' }),
        knex('profiles').insert({ id: 24, user_id: 99924, url: 'heyxray.com', profile_picture: 'https://img00.deviantart.net/e12e/i/2007/215/f/d/red_guy__s_photo_by_theedministrator765.jpg' }),
        knex('profiles').insert({ id: 25, user_id: 99925, url: 'heyyankee.com', profile_picture: 'http://cdn2-www.comingsoon.net/assets/uploads/2016/08/rocko.jpg' }),
        knex('profiles').insert({ id: 26, user_id: 99926, url: 'heyzulu.com', profile_picture: 'http://futurama-madhouse.net/fanart/ehrensperger/happy_leela.jpg' })
      ]);
    });
};