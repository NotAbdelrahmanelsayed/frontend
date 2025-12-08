from pathlib import Path
from configparser import ConfigParser, NoSectionError, NoOptionError

BASE_DIR = Path(__file__).resolve().parent
CONF_PATH = BASE_DIR / "conf.config"


def load_config() -> ConfigParser:
    conf = ConfigParser()
    # If file doesn't exist, we’ll create default config later
    if CONF_PATH.exists():
        conf.read(CONF_PATH)
    return conf


def get_lesson_number(conf: ConfigParser) -> int:
    try:
        last_number = conf.getint("lesson", "number")
    except (NoSectionError, NoOptionError, ValueError):
        # Default to 1 if config is missing or broken
        last_number = 1
    return last_number


def format_lesson_number(number: int) -> str:
    # 1 -> "001", 12 -> "012"
    return f"{number:03d}"


def create_folder(lesson_name: str, lesson_number_str: str) -> Path:
    # Simple sanitization: remove slashes
    safe_name = lesson_name.replace("/", "-").strip()
    folder_name = f"{lesson_number_str}-{safe_name}"
    folder_path = BASE_DIR / folder_name
    folder_path.mkdir(exist_ok=False)  # raise if exists -> helps avoid overwriting
    return folder_path


def update_lesson_number(conf: ConfigParser, new_number: int) -> None:
    conf_overwrite = ConfigParser()
    conf_overwrite["lesson"] = {"number": str(new_number)}
    with CONF_PATH.open("w") as configfile:
        conf_overwrite.write(configfile)


def create_html_content(lesson_name: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{lesson_name}</title>
</head>
<body>
    <h1>{lesson_name}</h1>
    <script src="main.js"></script>
</body>
</html>
"""


def main():
    conf = load_config()
    default_lesson_number = get_lesson_number(conf)
    default_lesson_str = format_lesson_number(default_lesson_number)

    # Ask user
    raw_lesson_number = input(f"Please enter the lesson number ({default_lesson_str}): ").strip()
    lesson_name = input("Please enter the lesson name: ").strip()

    # Decide final lesson number
    if raw_lesson_number == "":
        lesson_number = default_lesson_number
    else:
        lesson_number = int(raw_lesson_number)

    lesson_number_str = format_lesson_number(lesson_number)

    # Create folder
    folder_path = create_folder(lesson_name, lesson_number_str)

    # Create files
    html_path = folder_path / "index.html"
    js_path = folder_path / "main.js"

    html_path.write_text(create_html_content(lesson_name), encoding="utf-8")
    js_path.touch()

    # Update config for next run (current number + 1)
    update_lesson_number(conf, lesson_number + 1)

    print(f"Created lesson folder: {folder_path.name}")


if __name__ == "__main__":
    main()
