import Head from 'next/head'
import Link from 'next/link'
import Review, { siteTitle } from '../../components/review'
import styles from '../../components/review.module.css'

export default function Main() {
  return (
    <>
        <Review>
            <span className={styles.review_name}>Cake</span><span className={styles.review_timestamp}>Today at 7:38</span>
           	<Head>
                <title>{siteTitle} - Neon Wounds</title>
            </Head>
            <div>
                Hey, just finished Nemesis II - Neon Wounds by Nava. Here's a summary of my thoughts<br/> 
                <br/>
                <div className={styles.review_subtitle}>Dungeons: Gameplay - 5/10</div>
                <br/>
                <div className={styles.review_body}>
                For the most part I thought the dungeons were pretty generic. Almost all of them were not too far from just being 'spawner tunnels' but luckily each dungeon at least had a decent amount of structures to at least keep things a little more interesting. The enemies were almost always just dressed up skeletons/melee skeletons/creepers with increasingly powerful gear. While some of the areas had gimmicks, most of them were unsubstantial for setting the dungeons apart.<br/>
                <br/>
                There were a few exceptions. The 6th dungeon - the haunted tower - was a very vertically-based with many different room shapes. The best exception was the 7th area (voidlight crevice), which features knockback swords used to yeet exremely tanky enemies into the void. It was a nice change of pace.<br/>
                <br/>
                One very noticable change from many ctms is the nearly total lack of natural mobs, due to all areas having enormous honeypots nearby. Although I think that naturally spawned mobs have a lot of potential, most of the time they just occupy the dark outskirts of the a dungeon and serve a major nuisance. Maybe having almost none of them is a little too extreme, but overall to me not having to deal with a million stray skeleton gangs was a great quality of life change.<br/>
                <br/>
                Another (commonly done) thing this map does is format dungeons such that all points of interest can simply be walked to. There's always a staircase of a ladder or a tunnel to all of the loot, and none of it is really hidden in an interesting way. Sure these direct paths are convenient, but they take away all opportunities to leverage minecraft's build/break mechanics to make the areas more interesting to complete. I will give the map credit though, there are at least a few areas where you have to hop between structures (ie. Dungeons 8 and 16), as there is no direct connecting path, but despite that these areas are still extremely linear.<br/>
                </div>
                <br />
                <div className={styles.review_subtitle}>Dungeons: Aesthetics - 8/10 </div>
                <br/>
                <div className={styles.review_body}>
                Like many modern ctms, the dungeons look really nice! Nearly all areas had distinct and good looking block pallettes, and the structures were very well built. The map frequently made use of black concrete to create pits/walls that looked like an abyss, which was a nice touch. None of the dungeons had anything extremely unsual or notable, but that's okay - it's very rare to see.<br/>
                </div>
                <br/>
                <div className={styles.review_subtitle}>Loot - 4/10 </div>
                <br/>
                <div className={styles.review_body}>
                Part of the reason why the areas feel so similar is the loot pools have the exact same function in all the different areas; that is, all loot = slightly better armor/tools, some coal, some arrow, some blocks. I think dungeons fare the best when the loot is very distinct, making the areas stand out, serve different gameplay purposes, as well as making them feel more like real places. In this map, all areas contained more-or-less the same loot, just improved slightly.<br/>
                <br/>
                This further works against the map bc it is intersection-based. Because all loot is strictly better than the previous areas' the player's best choice is always to sequence break to the last area of the intersection, and possibly even move onto the next intersection before finishing the current one just to get ahead of the loot curve. Sure, resistance in later dungeons is increased in tandem with loot power, but usually not nearly enough to stop a player, especially since the player can pick up appropriately powerful gear within their current dungeon. In short, why is the map intersection based when loot power increases in a strictly linear fashion?<br/>
                <br/>
                The special loot was very well done though! Many of them provided command-block assisted affects, although these seldom had a major affect on my combat and in some cases even hindered it. The bonus monument was very well paced - the loot from it always felt significant and powerful.<br/>
                <br/>
                It may seem odd, but I think the map suffers from giving the player way too many arrows. It's nice to be able to use my bow without fearing running out of ammunition, but the dynamic of having your ranged weapon be of limited use can be interesting, and was not present in the map at all. Finding bows with infinity on them was entirely ignorable - I always had way more arrows. Furthermore, players will often snipe targets from a distance, as its objectively the best approach most of the time (free, powerful damage, without any risk), but this tactic usually isnt that fun and is quite boring. The map-maker enables this trap by providing an abundance of arrows.<br/>
                </div>
                <br/>
                <div className={styles.review_subtitle}>Story - 2/10 </div>
                <br/>
                <div className={styles.review_body}>
                Story feels underdeveloped and hardly seems to tie in to the gameplay of the map, almost as if it's an afterthought. The story is told as if there's some extremely epic conflict, but the dungeons themselves feel practically unrelated, like the story is just happenning in the background. The power of the villain is built up to be extremely powerful but it feels similarly underwhelming when he is just defeated by collecting a bunch of wools. He could have at least demonstrated his power by summoning a boss of some sort to directly challenge the player and prevent his demise, but nothing like this ever happens. I know minecraft map stories are exactly expected to be very in-depth, but overall it just kind of feels like a normal ctm accompanied by an seemingly unrelated fantasy jargon.<br/>
                <br/>
                The areas all have brief snippets of lore but it's never particularly interesting. I think the lore of the areas would hold up better without any exposition; an area title and the structures/mobs found within the dungeon tell their own story, and allow the player to fill in the gaps.<br/>
                </div>
                <br/>
                <div className={styles.review_subtitle}>Overall Score and Closing Thoughts - 4/10</div>
                <br/>
                <div className={styles.review_body}>
                I may seem pretty negative in this review but overall I think the map is actually very-well built! I just think it suffers very heavily from having its dungeons adhere to a strict formula (extending even seen to the dungeons' loot) which overall makes all the dungeons feel very generic and similar to me, and it feels like I just played through one extremely long dungeon, instead of 16 of them. The aethetics of the map are great, but definitely do not make up for my gripes with the gameplay, and the story does not do the map any favors in my opinion, but at least it gives the player a vague goal to yearn for.<br/>
                <br/>
                I have similar gripes with many modern ctm maps, and I believe many of them suffer from a lot of repetition over the course of too many dungeons that are themselves too big for their own good, so that's to say that in no way do I think nemesis ii is exceptionally lacking, and I really did enjoyed playing it very much! <br/>
                <br/>
                If you disagree or wish to discuss any of these topics id love to hear from a fresh perspective. Feel free to message or @ me.<br/>
                </div>
            </div>    
        </Review>
    </>
  )
}