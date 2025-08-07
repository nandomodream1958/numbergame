import random

def play_game():
    print(" 数字当てゲームへようこそ！")
    print("1〜100の数字を当ててください。AIが正解を決めています。")
    target = random.randint(1, 100)
    attempts = 0

    while True:
        guess = input("あなたの予想は？ (終了するには q と入力): ")

        if guess.lower() == 'q':
            print(" ゲームを終了します。")
            break

        if not guess.isdigit():
            print("⚠ 数字を入力してください！")
            continue

        guess = int(guess)
        attempts += 1

        if guess < target:
            print(" 正解はもっと大きいです！")
        elif guess > target:
            print(" 正解はもっと小さいです！")
        else:
            print(f" 正解！おめでとうございます！ {attempts} 回で当たりました！")
            break

if __name__ == "__main__":
    play_game()