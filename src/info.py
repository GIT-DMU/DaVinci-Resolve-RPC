#! python3
import win32gui


def enum_window_callback(hwnd, window_names):
    if win32gui.IsWindowVisible(hwnd) and "DaVinci Resolve - " in win32gui.GetWindowText(hwnd):
        window_names.append(win32gui.GetWindowText(hwnd))


def get_window_names():
    window_names = []
    win32gui.EnumWindows(enum_window_callback, window_names)
    return window_names


if __name__ == '__main__':
    window_names = get_window_names()
    if not window_names:
        print("Idling")
    else:
        print(window_names[0][18:])
